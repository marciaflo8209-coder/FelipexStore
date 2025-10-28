import Link from 'next/link';
export default function Home(){
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:16}}>
      <h1 style={{fontSize:36,color:'#ff6aa3'}}>FELIPEX STORE</h1>
      <p style={{color:'#9aa0a6'}}>Productos digitales — inicia sesión para ver y comprar.</p>
      <div style={{display:'flex',gap:8}}>
        <Link href="/login"><button className="btn btn-neon">Iniciar sesión</button></Link>
        <Link href="/register"><button className="btn" style={{background:'#111',color:'#fff'}}>Registrarse</button></Link>
      </div>
    </div>
  );
}
