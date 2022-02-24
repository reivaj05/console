"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7274],{29316:function(e,t,o){o(50390);var n=o(6369),r=o(86509),a=o(4285),l=o(85615),i=o(62559);t.Z=(0,a.Z)((function(e){return(0,r.Z)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"300px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center","& svg.min-icon":{width:12}}})}))((function(e){var t=e.to,o=e.label,r=e.classes,a=e.className,s=e.executeOnClick;return(0,i.jsxs)(n.rU,{to:t,className:"".concat(r.link," ").concat(a||""),onClick:function(){s&&s()},children:[(0,i.jsx)("div",{className:r.icon,children:(0,i.jsx)(l.xN,{})}),(0,i.jsx)("div",{className:r.label,children:o})]})}))},25534:function(e,t,o){var n=o(18489),r=(o(50390),o(25594)),a=o(86509),l=o(4285),i=o(72462),s=o(62559);t.Z=(0,l.Z)((function(e){return(0,a.Z)((0,n.Z)({},i.Bw))}))((function(e){var t=e.classes,o=e.className,n=void 0===o?"":o,a=e.children;return(0,s.jsx)("div",{className:t.contentSpacer,children:(0,s.jsx)(r.ZP,{container:!0,children:(0,s.jsx)(r.ZP,{item:!0,xs:12,className:n,children:a})})})}))},35721:function(e,t,o){var n=o(50390),r=o(34424),a=o(25594),l=o(86509),i=o(4285),s=o(35477),c=o(95467),p=o(26805),d=o(44078),m=o(5265),u=o(85615),g=o(62559),f={toggleList:m.kQ},h=(0,r.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),f);t.Z=h((0,i.Z)((function(e){return(0,l.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var t=e.classes,o=e.label,r=e.actions,l=e.sidebarOpen,i=e.operatorMode,m=e.managerObjects,f=e.toggleList,h=e.middleComponent;return e.features.includes("hide-menu")?(0,g.jsx)(n.Fragment,{}):(0,g.jsxs)(a.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,g.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:h?3:6,className:t.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!l&&(0,g.jsx)("div",{className:t.logo,children:i?(0,g.jsx)(p.Z,{}):(0,g.jsx)(d.Z,{})}),(0,g.jsx)(s.Z,{variant:"h4",className:t.labelStyle,children:o})]}),h&&(0,g.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:6,className:t.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:h}),(0,g.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:h?3:6,className:t.rightMenu,children:[r&&r,m&&m.length>0&&(0,g.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},size:"large",children:(0,g.jsx)(u.gx,{})})]})]})})))},27274:function(e,t,o){o.r(t);var n=o(18489),r=o(50390),a=o(86509),l=o(4285),i=o(65433),s=o(72462),c=o(35721),p=o(24442),d=o(29316),m=o(25534),u=o(49495),g=o(62559),f=i.BR.filter((function(e){return""!==e.logo}));t.default=(0,l.Z)((function(e){return(0,a.Z)((0,n.Z)((0,n.Z)({},s.Je),s.fc))}))((function(e){var t=e.classes;return(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(c.Z,{label:"Notification Endpoints"}),(0,g.jsx)(d.Z,{to:u.gA.NOTIFICATIONS_ENDPOINTS,label:"Return to Configured Endpoints",className:t.link}),(0,g.jsx)(m.Z,{children:(0,g.jsx)("div",{className:t.iconContainer,children:f.map((function(e){return(0,g.jsxs)("button",{className:t.lambdaNotif,onClick:function(){p.Z.push("".concat(u.gA.NOTIFICATIONS_ENDPOINTS_ADD,"/").concat(e.actionTrigger))},children:[(0,g.jsx)("div",{className:t.lambdaNotifIcon,children:(0,g.jsx)("img",{src:e.logo,className:t.logoButton,alt:e.targetTitle})}),(0,g.jsx)("div",{className:t.lambdaNotifTitle,children:(0,g.jsx)("b",{children:e.targetTitle})})]},"icon-".concat(e.targetTitle))}))})})]})}))},65433:function(e,t,o){o.d(t,{ee:function(){return a},dM:function(){return l},fk:function(){return f},BR:function(){return h},DD:function(){return b},oj:function(){return S}});var n,r=o(36222),a="notify_postgres",l="notify_mysql",i="notify_kafka",s="notify_amqp",c="notify_mqtt",p="notify_redis",d="notify_nats",m="notify_elasticsearch",u="notify_webhook",g="notify_nsq",f=function(e){return e.map((function(e){return{service_name:"".concat(e.service,":").concat(e.account_id),status:e.status}}))},h=[{actionTrigger:a,targetTitle:"Postgres SQL",logo:"/postgres-logo.svg"},{actionTrigger:i,targetTitle:"Kafka",logo:"/kafka-logo.svg"},{actionTrigger:s,targetTitle:"AMQP",logo:"/amqp-logo.svg"},{actionTrigger:c,targetTitle:"MQTT",logo:"/mqtt-logo.svg"},{actionTrigger:p,targetTitle:"Redis",logo:"/redis-logo.svg"},{actionTrigger:d,targetTitle:"NATS",logo:"/nats-logo.svg"},{actionTrigger:l,targetTitle:"Mysql",logo:"/mysql-logo.svg"},{actionTrigger:m,targetTitle:"Elastic Search",logo:"/elasticsearch-logo.svg"},{actionTrigger:u,targetTitle:"Webhook",logo:"/webhooks-logo.svg"},{actionTrigger:g,targetTitle:"NSQ",logo:"/nsq-logo.svg"}],y=[{name:"queue-dir",label:"Queue Directory",required:!0,tooltip:"staging dir for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue-limit",label:"Queue Limit",required:!1,tooltip:"maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter Comment"}],b=function(e){return e.filter((function(e){return""!==e.value}))},S=(n={},(0,r.Z)(n,i,[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client auth",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS auth",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS auth",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"}].concat(y)),(0,r.Z)(n,s,[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"}].concat(y)),(0,r.Z)(n,p,[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address. For example: `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"}].concat(y)),(0,r.Z)(n,c,[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Internal"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"}].concat(y)),(0,r.Z)(n,d,[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on', to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on', to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS auth",type:"string",placeholder:"Enter Client Key"}].concat(y)),(0,r.Z)(n,m,[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"}].concat(y)),(0,r.Z)(n,u,[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"}].concat(y)),(0,r.Z)(n,g,[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'trust server TLS without verification, defaults to "on" (verify)',type:"on|off"}].concat(y)),n)}}]);
//# sourceMappingURL=7274.a51a45fc.chunk.js.map