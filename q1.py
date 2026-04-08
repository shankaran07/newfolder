# before running this code run the below command
# pip install pandas matplotlib seaborn scikit-learn opencv-python

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Load dataset
df = pd.read_csv("data.csv")

# Exploratory Data Analysis
print("First 5 rows of dataset:")
print(df.head())

print("\nDataset Information:")
print(df.info())

print("\nStatistical Summary:")
print(df.describe())

# Check missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Select only numeric columns
df = df.select_dtypes(include=['number'])

# Mean, Median, Mode
print("\nMean of dataset:")
print(df.mean())

print("\nMedian of dataset:")
print(df.median())

print("\nMode of dataset:")
print(df.mode().iloc[0])

# Split features and target
X = df.iloc[:, :-1]
y = df.iloc[:, -1]

# Train test split
x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Model
model = LogisticRegression(max_iter=2000)
model.fit(x_train, y_train)

# Accuracy
print("\nAccuracy:", model.score(x_test, y_test))

# Visualization
sns.heatmap(df.corr(), annot=True)
plt.title("Correlation Heatmap")
plt.show()