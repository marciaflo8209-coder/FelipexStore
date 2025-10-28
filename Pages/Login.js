import { useState } from 'react';
import Router from 'next/router';

export default function Login(){
  const [user,setUser]=useState(''); const [pass,setPass]=useState('');
  async function submit(e){
    e.preventDefault();
    const res = await fetch('/api/auth/login',{
      method:'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ username:user, password:pass })
    });
    if (res.ok) Router.push('/client');
    else alert('Credenciales inválidas');
  }
  return (
    <div style={{padding:24}}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8,width:320}}>
        <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Usuario" />
        <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Contraseña" type="password" />
        <button className="btn btn-neon" type="submit">Entrar</button>
      </form>
    </div>
  );
  }
