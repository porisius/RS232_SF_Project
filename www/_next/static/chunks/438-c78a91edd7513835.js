"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{63078:function(e,t,r){r.d(t,{CJ:function(){return s},hi:function(){return i},u$:function(){return d}});var n,a,l=r(83464);let o=localStorage.getItem("url")?localStorage.getItem("url"):location.origin,s=parseInt(null!==(n=localStorage.getItem("fspeed"))&&void 0!==n?n:"1000"),d=parseInt(null!==(a=localStorage.getItem("mfspeed"))&&void 0!==a?a:"2500"),i=l.Z.create({baseURL:o||"http://localhost:8080"})},99600:function(e,t,r){r.d(t,{$:function(){return i},l:function(){return c}});var n=r(57437),a=r(12381),l=r(28842),o=r(41671),s=r(99388),d=r(75368);let i=(e,t)=>(0,n.jsxs)(a.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),style:{width:"100%"},children:[t,(0,n.jsx)(l.Z,{className:"ml-2 h-4 w-4"})]}),c=(e,t)=>(0,n.jsx)("p",{style:{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},children:"number"==typeof e.getValue(t)?Math.round(e.getValue(t)):"boolean"==typeof e.getValue(t)?!0===e.getValue(t)?(0,n.jsx)(o.Z,{className:"h-4 w-4"}):(0,n.jsx)(s.Z,{className:"h-4 w-4"}):e.getValue(t).includes("Unknown")?(0,n.jsx)(d.Z,{className:"h-4 w-4"}):e.getValue(t).toString()})},78605:function(e,t,r){r.d(t,{w:function(){return x}});var n=r(57437),a=r(71594),l=r(24525),o=r(2265),s=r(93448);let d=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",r),...a})})});d.displayName="Table";let i=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",r),...a})});i.displayName="TableHeader";let c=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",r),...a})});c.displayName="TableBody",o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})}).displayName="TableFooter";let u=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});u.displayName="TableRow";let f=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...a})});f.displayName="TableHead";let m=o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...a})});m.displayName="TableCell",o.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",r),...a})}).displayName="TableCaption";var g=r(12381),h=r(31593);function x(e){var t;let{columns:r,data:s,rowSelection:x,setRowSelection:p}=e,[v,b]=o.useState([]),j=(0,a.b7)({data:s,columns:r,getCoreRowModel:(0,l.sC)(),getPaginationRowModel:(0,l.G_)(),onSortingChange:b,getSortedRowModel:(0,l.tj)(),onRowSelectionChange:p,state:{sorting:v,rowSelection:x},autoResetAll:!1});return(0,n.jsxs)("div",{className:"rounded-md border",children:[(0,n.jsxs)(d,{children:[(0,n.jsx)(i,{children:j.getHeaderGroups().map(e=>(0,n.jsx)(u,{children:e.headers.map(e=>(0,n.jsx)(f,{children:e.isPlaceholder?null:(0,a.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,n.jsx)(c,{children:(null===(t=j.getRowModel().rows)||void 0===t?void 0:t.length)?j.getRowModel().rows.map(e=>(0,n.jsx)(u,{"data-state":e.getIsSelected()&&"selected",onClick:()=>{p({[e.id]:!0})},children:e.getVisibleCells().map(e=>(0,n.jsx)(m,{children:(0,a.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,n.jsx)(u,{children:(0,n.jsx)(m,{colSpan:r.length,className:"h-24 text-center",children:"No results."})})})]}),(0,n.jsx)(h.Z,{}),(0,n.jsxs)("div",{className:"flex items-center justify-end",style:{margin:10,gap:5},children:[(0,n.jsx)(g.z,{variant:"outline",size:"sm",onClick:()=>j.previousPage(),disabled:!j.getCanPreviousPage(),children:"Previous"}),(0,n.jsx)(g.z,{variant:"outline",size:"sm",onClick:()=>j.nextPage(),disabled:!j.getCanNextPage(),children:"Next"})]})]})}},12381:function(e,t,r){r.d(t,{z:function(){return i}});var n=r(57437),a=r(2265),l=r(37053),o=r(77712),s=r(93448);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),i=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:i=!1,...c}=e,u=i?l.g7:"button";return(0,n.jsx)(u,{className:(0,s.cn)(d({variant:a,size:o,className:r})),ref:t,...c})});i.displayName="Button"},79820:function(e,t,r){r.d(t,{Ol:function(){return s},SZ:function(){return i},Zb:function(){return o},aY:function(){return c},eW:function(){return u},ll:function(){return d}});var n=r(57437),a=r(2265),l=r(93448);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});o.displayName="Card";let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...a})});s.displayName="CardHeader";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});d.displayName="CardTitle";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...a})});i.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},31004:function(e,t,r){r.d(t,{BO:function(){return f},Qk:function(){return x},dg:function(){return h},h7:function(){return g}});var n=r(57437),a=r(2265),l=r(47625),o=r(8147),s=r(22190),d=r(93448);let i={light:"",dark:".dark"},c=a.createContext(null);function u(){let e=a.useContext(c);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let f=a.forwardRef((e,t)=>{let{id:r,className:o,children:s,config:i,...u}=e,f=a.useId(),g="chart-".concat(r||f.replace(/:/g,""));return(0,n.jsx)(c.Provider,{value:{config:i},children:(0,n.jsxs)("div",{"data-chart":g,ref:t,className:(0,d.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",o),...u,children:[(0,n.jsx)(m,{id:g,config:i}),(0,n.jsx)(l.h,{children:s})]})})});f.displayName="Chart";let m=e=>{let{id:t,config:r}=e,a=Object.entries(r).filter(e=>{let[t,r]=e;return r.theme||r.color});return a.length?(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(i).map(e=>{let[r,n]=e;return"\n".concat(n," [data-chart=").concat(t,"] {\n").concat(a.map(e=>{var t;let[n,a]=e,l=(null===(t=a.theme)||void 0===t?void 0:t[r])||a.color;return l?"  --color-".concat(n,": ").concat(l,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},g=o.u,h=a.forwardRef((e,t)=>{let{active:r,payload:l,className:o,indicator:s="dot",hideLabel:i=!1,hideIndicator:c=!1,label:f,labelFormatter:m,labelClassName:g,formatter:h,color:x,nameKey:v,labelKey:b}=e,{config:j}=u(),y=a.useMemo(()=>{var e;if(i||!(null==l?void 0:l.length))return null;let[t]=l,r="".concat(b||t.dataKey||t.name||"value"),a=p(j,t,r),o=b||"string"!=typeof f?null==a?void 0:a.label:(null===(e=j[f])||void 0===e?void 0:e.label)||f;return m?(0,n.jsx)("div",{className:(0,d.cn)("font-medium",g),children:m(o,l)}):o?(0,n.jsx)("div",{className:(0,d.cn)("font-medium",g),children:o}):null},[f,m,l,i,g,j,b]);if(!r||!(null==l?void 0:l.length))return null;let N=1===l.length&&"dot"!==s;return(0,n.jsxs)("div",{ref:t,className:(0,d.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",o),children:[N?null:y,(0,n.jsx)("div",{className:"grid gap-1.5",children:l.map((e,t)=>{let r="".concat(v||e.name||e.dataKey||"value"),a=p(j,e,r),l=x||e.payload.fill||e.color;return(0,n.jsx)("div",{className:(0,d.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===s&&"items-center"),children:h&&(null==e?void 0:e.value)!==void 0&&e.name?h(e.value,e.name,e,t,e.payload):(0,n.jsxs)(n.Fragment,{children:[(null==a?void 0:a.icon)?(0,n.jsx)(a.icon,{}):!c&&(0,n.jsx)("div",{className:(0,d.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===s,"w-1":"line"===s,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===s,"my-0.5":N&&"dashed"===s}),style:{"--color-bg":l,"--color-border":l}}),(0,n.jsxs)("div",{className:(0,d.cn)("flex flex-1 justify-between leading-none",N?"items-end":"items-center"),children:[(0,n.jsxs)("div",{className:"grid gap-1.5",children:[N?y:null,(0,n.jsx)("span",{className:"text-muted-foreground",children:(null==a?void 0:a.label)||e.name})]}),e.value&&(0,n.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});h.displayName="ChartTooltip";let x=s.D;function p(e,t,r){if("object"!=typeof t||null===t)return;let n="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,a=r;return r in t&&"string"==typeof t[r]?a=t[r]:n&&r in n&&"string"==typeof n[r]&&(a=n[r]),a in e?e[a]:e[r]}a.forwardRef((e,t)=>{let{className:r,hideIcon:a=!1,payload:l,verticalAlign:o="bottom",nameKey:s}=e,{config:i}=u();return(null==l?void 0:l.length)?(0,n.jsx)("div",{ref:t,className:(0,d.cn)("flex items-center justify-center gap-4","top"===o?"pb-3":"pt-3",r),children:l.map(e=>{let t="".concat(s||e.dataKey||"value"),r=p(i,e,t);return(0,n.jsxs)("div",{className:(0,d.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==r?void 0:r.icon)&&!a?(0,n.jsx)(r.icon,{}):(0,n.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==r?void 0:r.label]},e.value)})}):null}).displayName="ChartLegend"},31593:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(57437),a=r(2265),l=r(55156),o=r(93448);let s=a.forwardRef((e,t)=>{let{className:r,orientation:a="horizontal",decorative:s=!0,...d}=e;return(0,n.jsx)(l.f,{ref:t,decorative:s,orientation:a,className:(0,o.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",r),...d})});s.displayName=l.f.displayName},93448:function(e,t,r){r.d(t,{cn:function(){return l}});var n=r(61994),a=r(53335);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}}]);