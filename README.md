
# Email Sending Service

This project is a Node.js-based email sending service using SMTP with `nodemailer`. It allows you to send emails from your application by providing a simple API endpoint.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [License](#license)

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

\`\`\`bash
git clone https://github.com/your-username/email-sending-service.git
\`\`\`

Replace `your-username` with your actual GitHub username and `email-sending-service` with the name of your repository.

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies using `npm`:

\`\`\`bash
cd email-sending-service
npm install
\`\`\`

This will install all the necessary packages defined in the `package.json` file.

## Configuration

### 3. Environment Variables

Create a `.env` file in the root of the project directory and add the following environment variables:

\`\`\`bash
APP_PASSWORD=your-gmail-app-password
APP_EMAIL=your-host-email-address
PORT=5000
\`\`\`

- `APP_PASSWORD`: Your Gmail app password, which you can generate from your Google account under security settings.
- `APP_EMAIL`: Your host email address from which the emails will be sent.
- `PORT`: The port number on which the server will run (default: `5000`).

## Usage

### 4. Start the Server

Once you have set up the environment variables, start the server by running:

\`\`\`bash
npm start
\`\`\`

The server will start running on the port specified in the `.env` file (default: `5000`).

### 5. Send a Test Email

You can send a test email by making a `POST` request to the `/send-mail` endpoint with the required parameters.

## API Endpoint

### POST `/send-mail`

This endpoint allows you to send an email. The request body should include the following fields:

- `name`: The name of the recipient.
- `email`: The recipient's email address.

#### Example Request

\`\`\`json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
\`\`\`

#### Example Response

\`\`\`json
{
  "message": "Email sent successfully"
}
\`\`\`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
