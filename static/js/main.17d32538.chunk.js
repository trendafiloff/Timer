(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=s(8),a=s.n(r),o=(s(13),s(3)),c=s(4),h=s(2),d=s(6),l=s(5),b=s(0),p=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props.isStart?"disable":"";return Object(b.jsxs)("div",{className:"settings",children:[Object(b.jsxs)("div",{className:"settings-section",children:[Object(b.jsx)("label",{id:"session-label",style:{color:this.props.bodyHeaderContainerC},children:"Work Duration"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:e,id:"session-decrement",onClick:this.props.onDecreaseSession,style:{borderColor:this.props.bodyHeaderContainerC},children:"-"}),Object(b.jsxs)("span",{id:"session-length",style:{color:this.props.bodyHeaderContainerC},children:[this.props.sessionLength," ",this.props.workMins]}),Object(b.jsx)("button",{style:{borderColor:this.props.bodyHeaderContainerC},className:e,id:"session-increment",onClick:this.props.onIncreaseSession,children:"+"})]})]}),Object(b.jsxs)("div",{className:"settings-section",children:[Object(b.jsx)("label",{id:"session-label",style:{color:this.props.bodyHeaderContainerC},children:"Break Duration"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{style:{borderColor:this.props.bodyHeaderContainerC},className:e,id:"session-decrement",onClick:this.props.onDecreaseBreak,children:"-"}),Object(b.jsxs)("span",{id:"session-length",style:{color:this.props.bodyHeaderContainerC},children:[this.props.breakLength," ",this.props.breakMins]}),Object(b.jsx)("button",{style:{borderColor:this.props.bodyHeaderContainerC},className:e,id:"session-increment",onClick:this.props.onIncreaseBreak,children:"+"})]})]})]})}}]),s}(n.Component),u=function(e){var t=Math.floor(e/60);t<10&&(t="0"+t);var s=e-60*t;return s<10&&(s="0"+s),"".concat(t,":").concat(s)},m=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"times",children:[Object(b.jsxs)("div",{className:"times-content",style:{borderColor:this.props.bodyHeaderContainerC},children:[Object(b.jsxs)("label",{id:"timer-label",children:["Current:",Object(b.jsx)("br",{}),this.props.timeLabel]}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{id:"time-left",children:u(this.props.timeLeftInSecond)})]}),Object(b.jsxs)("title",{children:[this.props.timeLabel," - ",u(this.props.timeLeftInSecond)]})]})}}]),s}(n.Component),j=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"controller",children:[Object(b.jsx)("button",{style:{borderColor:this.props.bodyHeaderContainerC},id:"start_stop",onClick:this.props.onStartStop,children:this.props.isStart?"Pause":"Start"}),Object(b.jsx)("button",{style:{borderColor:this.props.bodyHeaderContainerC},id:"reset",onClick:this.props.onReset,children:"Reset"})]})}}]),s}(n.Component),C=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).audioBeep=i.a.createRef(),n.state={breakLength:Number.parseInt(n.props.defaultBreakLength,10),sessionLength:Number.parseInt(n.props.defaultSessionLength,10),timeLabel:"Work Session",timeLeftInSecond:60*Number.parseInt(n.props.defaultSessionLength,10),isStart:!1,timerInterval:null,breakMins:"mins",workMins:"mins",bodyHeaderContainerBg:"#2e4381",bodyHeaderContainerC:"#2194f0",linkColor:"#1a76c0",buttonBg:"#2194f0"},n.onIncreaseBreak=n.onIncreaseBreak.bind(Object(h.a)(n)),n.onDecreaseBreak=n.onDecreaseBreak.bind(Object(h.a)(n)),n.onIncreaseSession=n.onIncreaseSession.bind(Object(h.a)(n)),n.onDecreaseSession=n.onDecreaseSession.bind(Object(h.a)(n)),n.onReset=n.onReset.bind(Object(h.a)(n)),n.onStartStop=n.onStartStop.bind(Object(h.a)(n)),n.decreaseTimer=n.decreaseTimer.bind(Object(h.a)(n)),n.phaseControl=n.phaseControl.bind(Object(h.a)(n)),n}return Object(c.a)(s,[{key:"onIncreaseBreak",value:function(){this.state.breakLength<60&&!this.state.isStart&&this.setState({breakLength:this.state.breakLength+1}),1===this.state.breakLength&&this.setState({breakMins:"mins"})}},{key:"onDecreaseBreak",value:function(){this.state.breakLength>1&&!this.state.isStart&&this.setState({breakLength:this.state.breakLength-1}),2===this.state.breakLength&&this.setState({breakMins:"min"})}},{key:"onIncreaseSession",value:function(){this.state.sessionLength<60&&!this.state.isStart&&this.setState({sessionLength:this.state.sessionLength+1,timeLeftInSecond:60*(this.state.sessionLength+1)}),1===this.state.sessionLength&&this.setState({workMins:"mins"})}},{key:"onDecreaseSession",value:function(){this.state.sessionLength>1&&!this.state.isStart&&this.setState({sessionLength:this.state.sessionLength-1,timeLeftInSecond:60*(this.state.sessionLength-1)}),2===this.state.sessionLength&&this.setState({workMins:"min"})}},{key:"onReset",value:function(){this.setState({bodyHeaderContainerBg:"#2e4381",bodyHeaderContainerC:"#2194f0",linkColor:"#1a76c0",breakLength:Number.parseInt(this.props.defaultBreakLength,10),sessionLength:Number.parseInt(this.props.defaultSessionLength,10),timeLabel:"Work Session",timeLeftInSecond:60*Number.parseInt(this.props.defaultSessionLength,10),isStart:!1,timerInterval:null}),this.audioBeep.current.pause(),this.audioBeep.current.currentTime=0,this.state.timerInterval&&clearInterval(this.state.timerInterval)}},{key:"onStartStop",value:function(){var e=this;this.state.isStart?(this.audioBeep.current.pause(),this.audioBeep.current.currentTime=0,this.state.timerInterval&&clearInterval(this.state.timerInterval),this.setState({isStart:!this.state.isStart,timerInterval:null})):this.setState({isStart:!this.state.isStart,timerInterval:setInterval((function(){e.decreaseTimer(),e.phaseControl()}),1e3)})}},{key:"decreaseTimer",value:function(){this.setState({timeLeftInSecond:this.state.timeLeftInSecond-1})}},{key:"phaseControl",value:function(){0===this.state.timeLeftInSecond?this.audioBeep.current.play():-1===this.state.timeLeftInSecond&&("Work Session"===this.state.timeLabel?this.setState({timeLabel:"Break Session",timeLeftInSecond:60*this.state.breakLength,bodyHeaderContainerBg:"#58c77d",bodyHeaderContainerC:"#2C633E",linkColor:"#341213"}):this.setState({timeLabel:"Work Session",timeLeftInSecond:60*this.state.sessionLength,bodyHeaderContainerBg:"#2e4381",bodyHeaderContainerC:"#2194f0",linkColor:"#1a76c0"}))}},{key:"render",value:function(){return Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)("div",{className:"header",style:{backgroundColor:this.state.bodyHeaderContainerBg},children:Object(b.jsx)("h2",{className:"header-text",style:{backgroundColor:this.state.bodyHeaderContainerBg,color:this.state.bodyHeaderContainerC},children:"Customizable Timer"})}),Object(b.jsxs)("div",{className:"app",style:{backgroundColor:this.state.bodyHeaderContainerBg,color:this.state.bodyHeaderContainerC},children:[Object(b.jsxs)("div",{className:"container1",children:[Object(b.jsxs)("div",{className:"content",style:{backgroundColor:this.state.bodyHeaderContainerBg,color:this.state.bodyHeaderContainerC,borderColor:this.state.bodyHeaderContainerC},children:[Object(b.jsx)(p,{breakLength:this.state.breakLength,sessionLength:this.state.sessionLength,isStart:this.state.isStart,onDecreaseBreak:this.onDecreaseBreak,onDecreaseSession:this.onDecreaseSession,onIncreaseBreak:this.onIncreaseBreak,onIncreaseSession:this.onIncreaseSession,breakMins:this.state.breakMins,workMins:this.state.workMins,bodyHeaderContainerC:this.state.bodyHeaderContainerC}),Object(b.jsx)(m,{timeLabel:this.state.timeLabel,timeLeftInSecond:this.state.timeLeftInSecond,bodyHeaderContainerC:this.state.bodyHeaderContainerC}),Object(b.jsx)(j,{onReset:this.onReset,onStartStop:this.onStartStop,isStart:this.state.isStart,bodyHeaderContainerC:this.state.bodyHeaderContainerC,bodyHeaderContainerBg:this.state.bodyHeaderContainerBg}),Object(b.jsx)("audio",{id:"beep",preload:"auto",src:"https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Game%20Enginng%20Buzzer-14157-Free-Loops.com.mp3",ref:this.audioBeep})]}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("p",{children:"This is a customizable timer application that is supported by both desktop and mobile browsers. Its main purpose is to help its users efficiently manage their time while working, studying, or doing anything else that requires focus and concentration."}),Object(b.jsx)("p",{children:"It was inspired by the Pomodoro Technique - a time management method that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. The technique was developed by Francesco Cirillo in the late 1980s."}),Object(b.jsxs)("p",{children:["If you want to follow the technique, it is advised that you split your work into 25 minute intervals, followed by 5 minutes of break. After 4 work intervals have been completed, a longer break should be taken. Afterwards, the cycle of 4 work intervals with 3 small breaks continues, followed by a longer break after the 4",Object(b.jsx)("sup",{children:"th"})," work interval."]})]})]}),Object(b.jsxs)("div",{className:"footer",style:{backgroundColor:this.state.bodyHeaderContainerBg,color:this.state.bodyHeaderContainerC},children:["Designed by",Object(b.jsxs)("a",{style:{textDecoration:"none",color:this.state.linkColor},href:"https://serimi.github.io",children:[" ","Krasimir"]})," ","\u2022 2021"]})]})]})}}]),s}(n.Component);a.a.render(Object(b.jsx)(C,{defaultBreakLength:"5",defaultSessionLength:"25"}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.17d32538.chunk.js.map
