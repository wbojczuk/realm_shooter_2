export default async function GetData() {

    async function wait(){
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve("Resolved")},3000)
        })
    }
    await wait();
    return Promise.resolve()
}
