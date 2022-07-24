export const API_HOST = "https://62d82a2590883139358c76ae.mockapi.io/api/v1";

let Api = axios.create({
    baseURL: API_HOST
});



export async function createTask(data){

    try {

        const result = await Api.post('/Tasks', {
            Task_Title: data.title,
            Assigned_To: data.assigned,
            Delivery_Time: data.date,
            Description: data.description,
            State: "To do"
        });

        return result;
        
    } catch (error) {
        return error
    }
    
}


export async function listTask(){

    try {

        const result = await Api.get('/Tasks', {
            
        });

        return result;
        
    } catch (error) {
        return error
    }
    
}

export async function modifyState(id){

    try {

        const result = await Api.put('/Tasks/'+id, {
            State: "doing"
        });

        return result;
        
    } catch (error) {
        return error
    }
    
}