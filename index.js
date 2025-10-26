const ayarladim = {
  token: '',
  sunucu: '',
  isaxletthgateway: 'wss://gateway.discord.gg/?v=10&encoding=json',
  endp: 'https://discord.com/api/v10'
};

let saul = '', okul = {}, fixcokzormus = [], letthx834, letthxisaaaaa, whoislambokimmis;
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { const input = chunk.toString().trim(); if (input) saul = input; });
console.log('mfayi yaz ama sadece 1 kerelik mfa.txt den al yaz sonra kendisi geccek:');
setInterval(() => console.log('mfa geciliyor kendinde yazabilirsin:'), 240000);
const isaxletthththt = () => ({
  'Authorization': ayarladim.token, 'Content-Type': 'application/json', 'X-Discord-MFA-Authorization': saul,
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'X-Super-Properties': 'eyJicm93c2VyIjoiQ2hyb21lIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTMxLjAuMC4wIiwiY2xpZW50X2J1aWxkX251bWJlciI6MzU1NjI0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsLCJkZXZpY2UiOiIiLCJvcyI6IldpbmRvd3MiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIn0=',
  'X-Debug-Options': 'bugReporterEnabled', 'Accept': '*/*', 'Accept-Language': 'en-US,en;q=0.9,tr;q=0.8', 'Accept-Encoding': 'gzip, deflate, br',
  'Referer': 'https://discord.com/channels/@me', 'Origin': 'https://discord.com',
  'Sec-Ch-Ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  'Sec-Ch-Ua-Mobile': '?0', 'Sec-Ch-Ua-Platform': '"Windows"', 'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Site': 'same-origin'
});
const walter = code => {
  const endpoint = `${ayarladim.endp}/guilds/${ayarladim.sunucu}/vanity-url`;
  const payload = JSON.stringify({ code: code });
  for (let i = 0; i < 1; i++) {
    fetch(endpoint, { method: 'PATCH', headers: isaxletthththt(), body: payload })
    .then(async res => { if (res.ok) { const responseData = await res.json(); console.log(`LETTH X İSA ${code} | Uses: ${responseData.uses || 0}`); } })
    .catch(() => {});
  }
};
const isaxletth1 = () => {
  letthx834 = new WebSocket(ayarladim.isaxletthgateway);
  letthx834.onopen = () => {
    letthx834.send(JSON.stringify({ op: 2, d: { token: ayarladim.token, intents: 513, properties: {
      os: 'Windows', browser: 'Chrome', device: '', system_locale: 'en-US',
      browser_user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      browser_version: '131.0.0.0', os_version: '10', referrer: '', referring_domain: '',
      referrer_current: '', referring_domain_current: '', release_channel: 'stable',
      client_build_number: 355624, client_event_source: null } } }));
  };
  letthx834.onmessage = evt => {
    const packet = JSON.parse(evt.data);
    if (packet.s) letthxisaaaaa = packet.s;
    if (packet.op === 10) {
      clearInterval(whoislambokimmis);
      whoislambokimmis = setInterval(() => {
        if (letthx834.readyState === 1) letthx834.send(JSON.stringify({ op: 1, d: letthxisaaaaa }));
      }, packet.d.heartbeat_interval);
    }
    if (packet.t === 'READY') {
      console.log(`baglandim ${packet.d.user.username}`);
      packet.d.guilds.forEach(g => { if (g.vanity_url_code) okul[g.id] = g.vanity_url_code; });
    }
    if (packet.t === 'GUILD_UPDATE') {
      const gid = packet.d.id, oldVanity = okul[gid], newVanity = packet.d.vanity_url_code;
      if (oldVanity && oldVanity !== newVanity && !newVanity) {
        walter(oldVanity);
        okul[gid] = newVanity;
        console.log('İSA X LETTH CLAİMED');
      }
    }
  };
  letthx834.onclose = () => { clearInterval(whoislambokimmis); setTimeout(isaxletth1, 5000); };
};
isaxletth1();
