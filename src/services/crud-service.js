class CrudService{
    constructor(repository){
        this.repository= repository
    }
    async create(data){
        try {
            const response=await this.repository.create(data)
            return response
        } catch (error) {
            console.log("Something went wrong in the curd service");
            throw error
        }
    }
    
    async destroy(modelId){
        try {
            const response=await this.repository.destroy(modelId)
            return response
        } catch (error) {
            console.log("Something went wrong in the curd service");
            throw error
        }
    }
    async get(modelId){
        try {
            const response=await this.repository.get(modelId)
            return response
        } catch (error) {
            console.log("Something went wrong in the curd service");
            throw error
        }
    }
    async getAll(){
        try {
            const response=await this.repository.getAll()
            return response
        } catch (error) {
            console.log("Something went wrong in the curd service");
            throw error
        }
    }
    async update(modelId,data){
        try {
            const response=await this.repository.update(modelId,data)
            return response
        } catch (error) {
            console.log("Something went wrong in the curd service");
            throw error
        }
    }
    
}

module.exports=CrudService;
