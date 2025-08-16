// Main interactive behaviors
document.getElementById('year').textContent = new Date().getFullYear();

// AI demo: tries to post to /api/ai and shows 'Not available' if it fails.
// NOTE: GitHub Pages is static — create a small server/proxy to handle API calls securely.
document.getElementById('askBtn').addEventListener('click', async function(){
  const q = document.getElementById('q').value.trim();
  const out = document.getElementById('aiResult');
  if(!q){ out.textContent = 'Type a question first.'; return; }
  out.textContent = 'Thinking...';
  try{
    const res = await fetch('/api/ai', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({question:q})
    });
    if(!res.ok) throw new Error('API not available');
    const data = await res.json();
    out.textContent = data.answer || JSON.stringify(data);
  }catch(err){
    out.textContent = 'Not available — AI proxy not configured.';
  }
});
