# Text Narrator using Amazon Polly

This project is a serverless text-to-speech solution using Amazon Polly to convert text files stored in an Amazon S3 bucket into speech. Users can adjust voice, pitch, and speed parameters to customize the audio output.

## Features

- **Automated Text-to-Speech Conversion**: Upload a text file to an S3 bucket, and it will be converted to audio using Amazon Polly.
- **Customizable Audio Settings**: Voice, pitch, and speed can be configured to suit listener preferences.
- **Serverless Architecture**: AWS Lambda triggers text-to-speech conversion automatically when new text files are uploaded to S3.

## Tech Stack

- **Amazon Polly** - Text-to-speech synthesis service
- **Amazon S3** - Secure storage for text files and generated audio files
- **AWS Lambda** - Automatically triggers conversion upon file upload

## Setup

1. **AWS Setup**:
   - Create an S3 bucket to store uploaded text files and audio outputs.
   - Enable Amazon Polly in your AWS account.
   - Create an AWS Lambda function to process S3 upload events and trigger Polly.

2. **IAM Role**:
   - Ensure your Lambda function has permissions for S3 and Polly operations.
   - Attach necessary IAM policies to allow access.

3. **Lambda Configuration**:
   - Configure the Lambda function to trigger on object creation in your S3 bucket.
   - Add environment variables (if needed) for specific Polly settings.

## Process Flow

1. **Text Upload**:
   - Upload a `.txt` file to the designated S3 bucket.
2. **Lambda Trigger**:
   - Upon file upload, Lambda function is triggered to read the text file, configure Polly settings (voice, pitch, and speed), and generate the audio.
3. **Audio Storage**:
   - The generated audio file is stored back in the S3 bucket, available for download or streaming.

## Screenshots

1. **Text Upload Notification:**
   ![Text Upload]("C:\Users\HP\Downloads\4A.png")

2. **Audio File in S3 Bucket:**
   ![Audio File](![8B](https://github.com/user-attachments/assets/7ded6d9c-2c7b-46cd-b133-09cf3ad4d740)
)

## License

This project is licensed under the MIT License.
