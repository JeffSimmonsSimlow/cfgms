const pipedrive = require('pipedrive');
const defaultClient = new pipedrive.ApiClient();

// ToDo: Create PIPEDRIVE_API_KEY as an environment variable that holds real api key
defaultClient.authentications.api_key.apiKey = 'dc85448c45e55a482267e1a7f754c4249d331c39';

// Add all emails from PipeDrive
async function getEmails() {
    try {
        console.log('Sending request...');

        const api = new pipedrive.MailboxApi(defaultClient);

        let folder = "inbox"; // String | The type of folder to fetch
        let opts = {
            'start': 0, // Number | Pagination start
            'limit': 56 // Number | Items shown per page
        };

        const response = await api.getMailThreads(folder, opts);

        console.log('Email was retrieved successfully!', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;

        console.log('Reading failed', errorToLog);
    }
}


getEmails();
