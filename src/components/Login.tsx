
//mport imagem from './assets/login.png'

import { ArrowRight, Lock, UserRoundPlus } from "lucide-react";

export function Login() {
    
    return (
        <>
<div className="m-0 p-0 bg-zinc-700">


<h1 className="m- 10 flex align-baseline text-white text-4xl">Control<span className="text-red-700">ID</span></h1>  

    <div className="m-8 h-80 w-96 rounded bg-zinc-100">
        
        <h1 className="m-3 text-2xl text-zinc-800">Acesse sua conta</h1>
    
    <div className="m-8">
    
    <div>
    <input 
    className="w-80 text-black rounded border-collapse border-zinc-600"
    type="text" 
    
    placeholder='admin' 
    />
    <UserRoundPlus className="text-green-600" />
    </div>
    
    <Lock className="text-green-600" />
    <input 
    className="w-80 flex flex-auto w-70 rounded text-black border-zinc-600"
    type="text" 
    placeholder='Digite a senha' />

<div className="m-8 flex justify-between ">
    <span 
    className="font-light text-zinc-800">
    Lembrar Senha
    </span>

    <button className="m-4 flex items-center justify-around gap-2 rounded bg-red-600 px-2 py-1 text-sm font-medium text-white hover:bg-blue-700">
        Entrar
        <ArrowRight className="w-4 h-4" />
    </button>   
        
    </div>
    </div>
        
    </div>
    <footer className="text-zinc-400">2023@ Control ID.</footer>
    </div>

    <div className="space-y-4 m-4">
  <div className="text-white w-96 bg-violet-700 shadow rounded">
      w-96
  </div>
  <div className="text-white w-80 bg-violet-700 shadow rounded">
      w-80
  </div>
  <div className="text-white w-72 bg-violet-700 shadow rounded">
      w-72
  </div>
  <div className="text-white w-64 bg-violet-700 shadow rounded">
      w-64
  </div>
  <div className="text-white w-60 bg-violet-700 shadow rounded">
      w-60
  </div>
  <div className="text-white w-56 bg-violet-700 shadow rounded">
      w-56
  </div>
  <div className="text-white w-52 bg-violet-700 shadow rounded">
      w-52
  </div>
  <div className="text-white h-0 w-48 bg-violet-700 shadow rounded">
      w-48
  </div>
</div>
    
    </>
    )
}