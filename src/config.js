/* dev環境のAPI */
// const API_HOST = 'http://localhost:8080/api';
// module.exports = {
//   API: {
//     UPLOADED_IMG: `${API_HOST}/uploaded-img`,
//     PROCESSED_IMG: `${API_HOST}/processed-img`,
//     VOICE: `${API_HOST}/voice`,
//   },
// };

const API_HOST = 'http://localhost:8080/api?path=';
module.exports = {
  API: {
    UPLOADED_IMG: `${API_HOST}/api/uploadedImg`,
    PROCESSED_IMG: `${API_HOST}/api/processedImg`,
    VOICE: `${API_HOST}/api?path=/api/voice`,
  },
};
