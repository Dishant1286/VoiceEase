// Correct import statements for AWS SDK v3
import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
// Create Polly and S3 clients
const pollyClient = new PollyClient({ region: 'us-east-1' });
const s3Client = new S3Client({ region: 'us-east-1' });
export const handler = async (event) => {
    try {
        // Extract text input from the event
        const text = event.text;
        // Specify parameters for Polly
        const pollyParams = {
            Text: text,
            OutputFormat: 'mp3',
            VoiceId: 'Joanna' // You can change this to the desired voice
        };
        // Synthesize speech using Polly
        const pollyCommand = new SynthesizeSpeechCommand(pollyParams);
        const pollyData = await pollyClient.send(pollyCommand);
        // Generate a unique key for the audio file
        const key = `audio-${Date.now()}.mp3`;
        // Use the Upload class for handling the S3 upload of the audio stream
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: 'audiosaver', // Replace with your S3 bucket name
                Key: key,
                Body: pollyData.AudioStream,
                ContentType: 'audio/mpeg'
            }
        });
        // Wait for the upload to complete
        await upload.done();
        const outputMessage = `The audio file has been successfully stored in the S3 bucket by the name ${key}`;
        return {
            statusCode: 200,
            body: JSON.stringify({ message: outputMessage })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    }
};
