import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

train = tf.keras.utils.image_dataset_from_directory("dataset", validation_split=0.2, subset='training', seed=123, image_size=(64,64), batch_size=10).map(lambda x,y:(x/255.0,y))
test = tf.keras.utils.image_dataset_from_directory("dataset", validation_split=0.2, subset='validation', seed=123, image_size=(64,64), batch_size=10).map(lambda x,y:(x/255.0,y))

model = Sequential([Conv2D(64,3,activation='relu',input_shape=(64,64,3)), MaxPooling2D(), Flatten(), Dense(128,activation='relu'), Dense(2,activation='softmax')])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.fit(train, epochs=5, validation_data=test)
print(model.evaluate(test)[1])