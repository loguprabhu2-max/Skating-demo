document.addEventListener('DOMContentLoaded',function(){
  // Demo lists
  const videos = [
    {id:1,title:'Basic Skating Techniques',thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2fg56Ayf9awOBFi2jX2CFhB-iO5mVBaEUA&s',duration:'10:25',category:'Basics',paid:false},
    {id:2,title:'Speed Skating Drills',thumb:'https://www.inlinespeedskater.com/wp-content/uploads/2023/12/5-essential-speed-skating-drills-for-beginners-780x470.jpg',duration:'12:40',category:'Speed',paid:true},
    {id:3,title:'Endurance Training',thumb:'https://tidasports.com/wp-content/uploads/2026/02/Skating-Academy-3-1024x683.jpeg',duration:'15:30',category:'Endurance',paid:true},
    {id:4,title:'Advanced Cornering',thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5D_JoiTc9276jU6s8jnqAUlIcpWLlw34zpw&s',duration:'11:20',category:'Advanced',paid:true}
  ];

  // Videos page render
  const videoList = document.getElementById('videoList');
  if(videoList){
    function renderVideos(filterPaid=null,category='all'){
      videoList.innerHTML='';
      videos.filter(v=> (filterPaid===null||v.paid===filterPaid) && (category==='all'||v.category===category)).forEach(v=>{
        const col=document.createElement('div');col.className='col-md-4';
        col.innerHTML=`<div class="card glass p-2 video-item"><img src="${v.thumb}" class="img-fluid rounded mb-2"><h6>${v.title} ${v.paid?'<span class="badge bg-warning text-dark">Premium</span>':''}</h6><p class="small text-muted">${v.duration}</p><button class="btn btn-sm btn-outline-light playBtn" data-id="${v.id}">Play</button></div>`;
        videoList.appendChild(col);
      })
      document.querySelectorAll('.playBtn').forEach(b=>b.addEventListener('click',openVideo));
    }
    document.getElementById('freeTab').addEventListener('click',()=>renderVideos(false));
    document.getElementById('paidTab').addEventListener('click',()=>renderVideos(true));
    document.getElementById('categoryFilter').addEventListener('change',e=>renderVideos(null,e.target.value));
    renderVideos(null,'all');
  }

  function openVideo(e){
    const id=parseInt(e.currentTarget.dataset.id,10);const v=videos.find(x=>x.id===id);
    const modal=document.getElementById('videoModal');
    if(modal){
      document.getElementById('videoTitle').innerText=v.title;
      document.getElementById('videoPlayer').innerHTML=`<img src="${v.thumb}" class="img-fluid">`;
      const bs=new bootstrap.Modal(modal);bs.show();
    }
  }

  // Diet page calories
  const calInput=document.getElementById('calInput');
  const addCal=document.getElementById('addCal');
  const calTotal=document.getElementById('calTotal');
  let total=0;
  if(addCal){addCal.addEventListener('click',()=>{const v=parseInt(calInput.value||0,10);total+=v;calTotal.innerText=total;calInput.value='';});}

  // Event payment demo
  const payNow=document.getElementById('payNow');
  if(payNow)payNow.addEventListener('click',()=>{new bootstrap.Modal(document.getElementById('paymentModal')).show();});

  // Contact and forms - show toast (demo)
  const contactForm=document.getElementById('contactForm');
  if(contactForm)contactForm.addEventListener('submit',e=>{e.preventDefault();alert('Thanks! Message sent (demo)');contactForm.reset();});

  const classForm=document.getElementById('classForm');if(classForm)classForm.addEventListener('submit',e=>{e.preventDefault();alert('Registered for class (demo)');classForm.reset();});

  // Admin demo charts & tables
  const salesChart=document.getElementById('salesChart');
  if(salesChart){
    new Chart(salesChart,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Revenue',data:[5000,8000,12000,9000,15000,17000],borderColor:'#ffc107',backgroundColor:'rgba(255,193,7,0.15)',tension:0.4}]},options:{plugins:{legend:{display:false}}}});
  }

  const recentStudents=document.getElementById('recentStudents');
  if(recentStudents){['Anika','Dev','Riya','Sam'].forEach(n=>{const li=document.createElement('li');li.className='list-group-item';li.innerText=n;recentStudents.appendChild(li);});}

  const studentsTable=document.getElementById('studentsTable');
  if(studentsTable){
    const demo=[['1','Anika','Beginner','9876543210','Active'],['2','Dev','Intermediate','9123456780','Active'],['3','Riya','Advanced','9988776655','Pending']];
    demo.forEach(r=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td>`;studentsTable.appendChild(tr);});
  }

});
