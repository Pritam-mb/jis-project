import React from 'react';

import ECGSignalChart from './ECGSignalChart';
import Sp from './Sp';
import SpO2Meter from './SpO2Meter ';
import TemperatureBarChart from './TemperatureBarChart';
import ChartComponent from './ChartComponent';
function Dashboard() {
  const userName = "Pritam";
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const heartPractices = [
  {
    title: "Daily Walk",
    desc: "A 30-minute brisk walk improves blood circulation and reduces heart risks.",
    img: "https://cdn-icons-png.flaticon.com/512/1040/1040226.png",
  },
  {
    title: "Stay Hydrated",
    desc: "Drinking enough water helps maintain blood volume and heart function.",
    img: "https://cdn-icons-png.flaticon.com/512/7281/7281804.png",
  },
  {
    title: "Deep Breathing",
    desc: "Practice 5 mins of deep breathing to lower stress and heart rate.",
    img: "https://cdn-icons-png.flaticon.com/512/1973/1973923.png",
  },
  {
    title: "Avoid Junk Food",
    desc: "Too much salt and fat can strain your heart. Eat clean!",
    img: "https://cdn-icons-png.flaticon.com/512/135/135620.png",
  },
];

  return (
    <div style={{  background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',border:'2px solid black', padding: '12px', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '2000px', width: '100%' }}>
       
        <div className="mb-8 text-left px-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userName} 👋</h1>
          <p className="text-gray-600 text-sm mt-1">Your Health Monitoring Dashboard | {today}</p>
        </div>

        <div className='flex flex-wrap justify-center gap-6'>
       
          <Card title="Heart-Rate" value="82-BPM" bg="green" img="https://static.vecteezy.com/system/resources/previews/047/589/283/original/heart-rate-logo-sign-outline-vector.jpg" />
          <Card title="ECG-signal" value="25-Hz" bg="#bf5366" img="https://cdn-icons-png.flaticon.com/512/26/26589.png" />
          <Card title="SpO2" value={<SpO2Meter value={78} />} bg="#b9a4d2" img="https://cdn0.iconfinder.com/data/icons/nursing-home-thick-line/1000/8640-Pulse_Oximeter-1024.png" subValue="82-BPM" />
          <Card title="Temperature" value="37.5°C" bg="orange" img="https://i.etsystatic.com/23821301/r/il/dcbcfc/2484217158/il_fullxfull.2484217158_oi4q.jpg" />
          <Card title="Posture" value="Standing" bg="#7a8dab" img="https://static.vecteezy.com/system/resources/previews/016/009/835/non_2x/the-human-icon-and-logo-vector.jpg" />
        </div>

        <div className='flex justify-center flex-wrap gap-6 mt-10' style={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', padding: '20px', borderRadius: '20px' }}>
          <ChartComponent />
          <TemperatureBarChart />
        </div>

        <div className='flex justify-center flex-wrap gap-6 mt-6' style={{ background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', padding: '20px', borderRadius: '20px' }}>
          <Sp />
          <ECGSignalChart />
        </div>


      <div className='mt-10 px-6'>
  <h2 className="text-2xl font-bold text-gray-700 mb-4">🫀 Heart Health Practices</h2>
  <div className='flex flex-wrap gap-6 justify-center'>
    {heartPractices.map((practice, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md p-4 w-[260px] hover:shadow-xl transition-all duration-300"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <img src={practice.img} alt={practice.title} style={{ height: '60px', marginBottom: '12px' }} />
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{practice.title}</h3>
        <p className="text-sm text-gray-600">{practice.desc}</p>
      </div>
    ))}
  </div>
</div>
        
      </div>
    </div>
  )
}

const Card = ({ title, value, bg, img, subValue }) => (
  <div
    style={{
      height: '190px',
      width: '320px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: bg,
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}
    className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h2 style={{ margin: 0, fontSize: '22px' }}>{title}</h2>
      <img src={img} alt={`${title} Icon`} style={{ height: '50px', width: '50px', objectFit: 'contain', borderRadius: '50%', padding: '4px' }} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: subValue ? 'space-between' : 'center', flexGrow: 1 }}>
      <div style={{ fontSize: '40px', fontWeight: 'bold' }}>{subValue || value}</div>
      {subValue && <div style={{ transform: 'scale(0.7)', transformOrigin: 'right center' }}>{value}</div>}
    </div>



  </div>
);

export default Dashboard;

