const a4_0x3f171a=a4_0x54cc;(function(_0x11b2b9,_0x62ee0){const _0x3969fb=a4_0x54cc,_0x7c3c70=_0x11b2b9();while(!![]){try{const _0x53bb6f=-parseInt(_0x3969fb(0x201))/0x1*(parseInt(_0x3969fb(0x1f8))/0x2)+parseInt(_0x3969fb(0x208))/0x3+-parseInt(_0x3969fb(0x20d))/0x4+-parseInt(_0x3969fb(0x1f2))/0x5+parseInt(_0x3969fb(0x207))/0x6+-parseInt(_0x3969fb(0x1f6))/0x7+parseInt(_0x3969fb(0x212))/0x8;if(_0x53bb6f===_0x62ee0)break;else _0x7c3c70['push'](_0x7c3c70['shift']());}catch(_0x1a4b06){_0x7c3c70['push'](_0x7c3c70['shift']());}}}(a4_0x5b9d,0xcb127));const a4_0x23704b=(function(){let _0x22a8b0=!![];return function(_0x2b4683,_0x1acd7e){const _0x1ac3ec=_0x22a8b0?function(){const _0x226883=a4_0x54cc;if(_0x1acd7e){const _0x26552d=_0x1acd7e[_0x226883(0x20c)](_0x2b4683,arguments);return _0x1acd7e=null,_0x26552d;}}:function(){};return _0x22a8b0=![],_0x1ac3ec;};}()),a4_0x15e291=a4_0x23704b(this,function(){const _0x59a33a=a4_0x54cc;return a4_0x15e291['toString']()[_0x59a33a(0x204)](_0x59a33a(0x213))['toString']()['constructor'](a4_0x15e291)[_0x59a33a(0x204)](_0x59a33a(0x213));});a4_0x15e291(),require(a4_0x3f171a(0x1fe))[a4_0x3f171a(0x211)]();const {Pool}=require('pg'),s=require(a4_0x3f171a(0x1ff));var dbUrl=s[a4_0x3f171a(0x1f5)]?s['DATABASE_URL']:a4_0x3f171a(0x1f3);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableAntiSpam=async()=>{const _0x1e93be=a4_0x3f171a;try{await pool[_0x1e93be(0x1fa)](_0x1e93be(0x210)),console['log']('La\x20table\x20\x27antispam\x27\x20a\x20été\x20créée\x20avec\x20succès.');}catch(_0xc282d3){console[_0x1e93be(0x1fc)](_0x1e93be(0x1f7),_0xc282d3);}};creerTableAntiSpam();function a4_0x54cc(_0x1fd8fb,_0x549f70){const _0xc6d1a0=a4_0x5b9d();return a4_0x54cc=function(_0x15e291,_0x23704b){_0x15e291=_0x15e291-0x1f2;let _0x5b9d2e=_0xc6d1a0[_0x15e291];return _0x5b9d2e;},a4_0x54cc(_0x1fd8fb,_0x549f70);}async function addGroupToSpamList(_0x49a580){const _0x3facae=a4_0x3f171a,_0x1169cd=await pool[_0x3facae(0x202)]();try{const _0x1aad58=_0x3facae(0x20a),_0x1c748f=[_0x49a580];await _0x1169cd[_0x3facae(0x1fa)](_0x1aad58,_0x1c748f),console[_0x3facae(0x20f)]('Groupe\x20JID\x20'+_0x49a580+_0x3facae(0x1f9));}catch(_0x4e5fb7){console['error']('Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20groupe\x20banni\x20:',_0x4e5fb7);}finally{_0x1169cd[_0x3facae(0x20b)]();}}async function isGroupspam(){const _0x5bebef=a4_0x3f171a,_0x5e0dc5=await pool[_0x5bebef(0x202)]();try{const _0x5943ac=_0x5bebef(0x209),_0x15052b=await _0x5e0dc5['query'](_0x5943ac);let _0x251af0=[];return _0x15052b[_0x5bebef(0x206)][_0x5bebef(0x203)](_0x2b557e=>{const _0x2c5328=_0x5bebef;_0x251af0[_0x2c5328(0x1fb)](_0x2b557e[_0x2c5328(0x1fd)]);}),_0x251af0;}catch(_0x31b3ca){return console[_0x5bebef(0x1fc)](_0x5bebef(0x205),_0x31b3ca),[];}finally{_0x5e0dc5[_0x5bebef(0x20b)]();}}function a4_0x5b9d(){const _0x6c044=['log','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antispam\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20groupeJid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','config','30004208vGbEZU','(((.+)+)+)+$','6536750GoTTyd','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','exports','DATABASE_URL','2095282XRGQKV','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antispam\x27:','822318zotpHo','\x20ajouté\x20à\x20la\x20liste\x20des\x20groupes\x20bannis.','query','push','error','groupejid','dotenv','../set','Groupe\x20JID\x20','3NhXxCy','connect','forEach','search','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20antispam\x20:','rows','4038702lSgRsI','2110650OTzNFH','SELECT\x20*\x20FROM\x20antispam','INSERT\x20INTO\x20antispam\x20(groupeJid)\x20VALUES\x20($1)','release','apply','5821028qyHnIw','\x20supprimé\x20de\x20la\x20liste\x20des\x20groupes\x20spam.'];a4_0x5b9d=function(){return _0x6c044;};return a4_0x5b9d();}async function removeGroupFromSpamList(_0x25a341){const _0xc15504=a4_0x3f171a,_0x1759bc=await pool[_0xc15504(0x202)]();try{const _0x5c8fd3='DELETE\x20FROM\x20antispam\x20WHERE\x20groupeJid\x20=\x20$1',_0x36133a=[_0x25a341];await _0x1759bc[_0xc15504(0x1fa)](_0x5c8fd3,_0x36133a),console[_0xc15504(0x20f)](_0xc15504(0x200)+_0x25a341+_0xc15504(0x20e));}catch(_0x16ed58){console[_0xc15504(0x1fc)]('Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20groupe\x20spam\x20:',_0x16ed58);}finally{_0x1759bc[_0xc15504(0x20b)]();}}module[a4_0x3f171a(0x1f4)]={'addGroupToSpamList':addGroupToSpamList,'isGroupspam':isGroupspam,'removeGroupFromSpamList':removeGroupFromSpamList};
