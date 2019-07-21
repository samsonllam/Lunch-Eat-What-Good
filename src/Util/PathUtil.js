const GOOGLE_PLACE_NEARBYSEARCH_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/"
const API_KEY = "AIzaSyCGOqU7PTHrO238H01OrYew-MVp4DkbH80"

class PathUtil {
    static get getApiURL(){
        return GOOGLE_PLACE_NEARBYSEARCH_URL
    }

    static get getApiKey(){
        return API_KEY
    }
}

export default PathUtil