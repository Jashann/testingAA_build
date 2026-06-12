var L=Object.defineProperty;var R=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var N=(n,e,t)=>e in n?L(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,v=(n,e)=>{for(var t in e||(e={}))T.call(e,t)&&N(n,t,e[t]);if(R)for(var t of R(e))E.call(e,t)&&N(n,t,e[t]);return n};const __TWEAKS_STYLE=`
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;function useTweaks(n){const[e,t]=React.useState(n),a=React.useCallback((r,d)=>{const o=typeof r=="object"&&r!==null?r:{[r]:d};t(c=>v(v({},c),o)),window.parent.postMessage({type:"__edit_mode_set_keys",edits:o},"*"),window.dispatchEvent(new CustomEvent("tweakchange",{detail:o}))},[]);return[e,a]}function TweaksPanel({title:n="Tweaks",children:e}){const[t,a]=React.useState(!1),r=React.useRef(null),d=React.useRef({x:16,y:16}),o=16,c=React.useCallback(()=>{const i=r.current;if(!i)return;const l=i.offsetWidth,p=i.offsetHeight,u=Math.max(o,window.innerWidth-l-o),x=Math.max(o,window.innerHeight-p-o);d.current={x:Math.min(u,Math.max(o,d.current.x)),y:Math.min(x,Math.max(o,d.current.y))},i.style.right=d.current.x+"px",i.style.bottom=d.current.y+"px"},[]);React.useEffect(()=>{if(!t)return;if(c(),typeof ResizeObserver=="undefined")return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c);const i=new ResizeObserver(c);return i.observe(document.documentElement),()=>i.disconnect()},[t,c]),React.useEffect(()=>{const i=l=>{var u;const p=(u=l==null?void 0:l.data)==null?void 0:u.type;p==="__activate_edit_mode"?a(!0):p==="__deactivate_edit_mode"&&a(!1)};return window.addEventListener("message",i),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",i)},[]);const g=()=>{a(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},k=i=>{const l=r.current;if(!l)return;const p=l.getBoundingClientRect(),u=i.clientX,x=i.clientY,m=window.innerWidth-p.right,f=window.innerHeight-p.bottom,s=b=>{d.current={x:m-(b.clientX-u),y:f-(b.clientY-x)},c()},w=()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",w)};window.addEventListener("mousemove",s),window.addEventListener("mouseup",w)};return t?React.createElement(React.Fragment,null,React.createElement("style",null,__TWEAKS_STYLE),React.createElement("div",{ref:r,className:"twk-panel","data-omelette-chrome":"",style:{right:d.current.x,bottom:d.current.y}},React.createElement("div",{className:"twk-hd",onMouseDown:k},React.createElement("b",null,n),React.createElement("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:i=>i.stopPropagation(),onClick:g},"✕")),React.createElement("div",{className:"twk-body"},e))):null}function TweakSection({label:n,children:e}){return React.createElement(React.Fragment,null,React.createElement("div",{className:"twk-sect"},n),e)}function TweakRow({label:n,value:e,children:t,inline:a=!1}){return React.createElement("div",{className:a?"twk-row twk-row-h":"twk-row"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,n),e!=null&&React.createElement("span",{className:"twk-val"},e)),t)}function TweakSlider({label:n,value:e,min:t=0,max:a=100,step:r=1,unit:d="",onChange:o}){return React.createElement(TweakRow,{label:n,value:`${e}${d}`},React.createElement("input",{type:"range",className:"twk-slider",min:t,max:a,step:r,value:e,onChange:c=>o(Number(c.target.value))}))}function TweakToggle({label:n,value:e,onChange:t}){return React.createElement("div",{className:"twk-row twk-row-h"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,n)),React.createElement("button",{type:"button",className:"twk-toggle","data-on":e?"1":"0",role:"switch","aria-checked":!!e,onClick:()=>t(!e)},React.createElement("i",null)))}function TweakRadio({label:n,value:e,options:t,onChange:a}){var f;const r=React.useRef(null),[d,o]=React.useState(!1),c=React.useRef(e);c.current=e;const g=s=>String(typeof s=="object"?s.label:s).length;if(!(t.reduce((s,w)=>Math.max(s,g(w)),0)<=((f={2:16,3:10}[t.length])!=null?f:0))){const s=w=>{const b=t.find(h=>String(typeof h=="object"?h.value:h)===w);return b===void 0?w:typeof b=="object"?b.value:b};return React.createElement(TweakSelect,{label:n,value:e,options:t,onChange:w=>a(s(w))})}const l=t.map(s=>typeof s=="object"?s:{value:s,label:s}),p=Math.max(0,l.findIndex(s=>s.value===e)),u=l.length,x=s=>{const w=r.current.getBoundingClientRect(),b=w.width-4,h=Math.floor((s-w.left-2)/b*u);return l[Math.max(0,Math.min(u-1,h))].value};return React.createElement(TweakRow,{label:n},React.createElement("div",{ref:r,role:"radiogroup",onPointerDown:s=>{o(!0);const w=x(s.clientX);w!==c.current&&a(w);const b=_=>{if(!r.current)return;const y=x(_.clientX);y!==c.current&&a(y)},h=()=>{o(!1),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",h)};window.addEventListener("pointermove",b),window.addEventListener("pointerup",h)},className:d?"twk-seg dragging":"twk-seg"},React.createElement("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${p} * (100% - 4px) / ${u})`,width:`calc((100% - 4px) / ${u})`}}),l.map(s=>React.createElement("button",{key:s.value,type:"button",role:"radio","aria-checked":s.value===e},s.label))))}function TweakSelect({label:n,value:e,options:t,onChange:a}){return React.createElement(TweakRow,{label:n},React.createElement("select",{className:"twk-field",value:e,onChange:r=>a(r.target.value)},t.map(r=>{const d=typeof r=="object"?r.value:r,o=typeof r=="object"?r.label:r;return React.createElement("option",{key:d,value:d},o)})))}function TweakText({label:n,value:e,placeholder:t,onChange:a}){return React.createElement(TweakRow,{label:n},React.createElement("input",{className:"twk-field",type:"text",value:e,placeholder:t,onChange:r=>a(r.target.value)}))}function TweakNumber({label:n,value:e,min:t,max:a,step:r=1,unit:d="",onChange:o}){const c=i=>t!=null&&i<t?t:a!=null&&i>a?a:i,g=React.useRef({x:0,val:0});return React.createElement("div",{className:"twk-num"},React.createElement("span",{className:"twk-num-lbl",onPointerDown:i=>{i.preventDefault(),g.current={x:i.clientX,val:e};const l=(String(r).split(".")[1]||"").length,p=x=>{const m=x.clientX-g.current.x,f=g.current.val+m*r,s=Math.round(f/r)*r;o(c(Number(s.toFixed(l))))},u=()=>{window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",u)};window.addEventListener("pointermove",p),window.addEventListener("pointerup",u)}},n),React.createElement("input",{type:"number",value:e,min:t,max:a,step:r,onChange:i=>o(c(Number(i.target.value)))}),d&&React.createElement("span",{className:"twk-num-unit"},d))}function __twkIsLight(n){const e=String(n).replace("#",""),t=e.length===3?e.replace(/./g,c=>c+c):e.padEnd(6,"0"),a=parseInt(t.slice(0,6),16);if(Number.isNaN(a))return!0;const r=a>>16&255,d=a>>8&255,o=a&255;return r*299+d*587+o*114>148e3}const __TwkCheck=({light:n})=>React.createElement("svg",{viewBox:"0 0 14 14","aria-hidden":"true"},React.createElement("path",{d:"M3 7.2 5.8 10 11 4.2",fill:"none",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",stroke:n?"rgba(0,0,0,.78)":"#fff"}));function TweakColor({label:n,value:e,options:t,onChange:a}){if(!t||!t.length)return React.createElement("div",{className:"twk-row twk-row-h"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,n)),React.createElement("input",{type:"color",className:"twk-swatch",value:e,onChange:o=>a(o.target.value)}));const r=o=>String(JSON.stringify(o)).toLowerCase(),d=r(e);return React.createElement(TweakRow,{label:n},React.createElement("div",{className:"twk-chips",role:"radiogroup"},t.map((o,c)=>{const g=Array.isArray(o)?o:[o],[k,...i]=g,l=i.slice(0,4),p=r(o)===d;return React.createElement("button",{key:c,type:"button",className:"twk-chip",role:"radio","aria-checked":p,"data-on":p?"1":"0","aria-label":g.join(", "),title:g.join(" · "),style:{background:k},onClick:()=>a(o)},l.length>0&&React.createElement("span",null,l.map((u,x)=>React.createElement("i",{key:x,style:{background:u}}))),p&&React.createElement(__TwkCheck,{light:__twkIsLight(k)}))})))}function TweakButton({label:n,onClick:e,secondary:t=!1}){return React.createElement("button",{type:"button",className:t?"twk-btn secondary":"twk-btn",onClick:e},n)}Object.assign(window,{useTweaks,TweaksPanel,TweakSection,TweakRow,TweakSlider,TweakToggle,TweakRadio,TweakSelect,TweakText,TweakNumber,TweakColor,TweakButton});
