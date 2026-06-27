
const apiEndpoints = {

    PROGRAMS: {
        LIST: {
            url: "/programs",
            method: "get"
        },
    },
    UPLOAD:{
        UPLOAD_DOCUMENT: {
            url: "/uploads/avatar",
            method: "post"
        }
    },
    ADMISSION:{
        CREATE_ADMISSION: {
            url: "/admission",
            method: "post"
        }
    }
  
}

export default apiEndpoints;