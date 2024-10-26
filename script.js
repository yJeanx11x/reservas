const reservas=[]
function adicionarReserva(cliente,assento){
        
return new Promise((resolve, reject) => {
        const assentoOcupado = reservas.find(reserva => reserva.assento == assento);
        if(assentoOcupado){
                reject(`O assento ${assento} já está reservado.`)
        }else{
                const add={
                        id:reservas.length+1,
                        cliente:cliente,
                        assento:assento,
                        confirmada:false
                }
                reservas.push(add)
                resolve(`Reserva para ${cliente} no assento ${assento} foi adicionada com sucesso!`);
        }
})

        

}



async function confirmarReserva(nome,id){

        try{
        const confirmada=await setTimeout(()=>{
                 adicionarReserva(nome,id)
                 console.log(reservas)
        },2000)
        }catch(e){console.log(e)}

  }
  confirmarReserva('Jean',4)
  confirmarReserva('Marcos',12)
  confirmarReserva('Jean',3)
