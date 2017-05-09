webpackJsonp([1],{120:function(M,L){},121:function(M,L){},122:function(M,L){},123:function(M,L){},156:function(M,L,N){N(121);var t=N(17)(N(69),N(160),"data-v-33a4fb30",null);M.exports=t.exports},157:function(M,L,N){N(123);var t=N(17)(N(70),N(162),"data-v-87cb869a",null);M.exports=t.exports},158:function(M,L,N){N(120);var t=N(17)(N(71),N(159),"data-v-2eb67534",null);M.exports=t.exports},159:function(M,L,N){M.exports={render:function(){var M=this,L=M.$createElement,t=M._self._c||L;return t("section",{staticClass:"landing"},[t("img",{staticClass:"torch",attrs:{src:N(35)}}),t("h1",[M._v("Werewolf Village")]),t("hr"),M.vNew?t("div",[t("div",{staticClass:"form-group row"},[t("input",{directives:[{name:"model",rawName:"v-model",value:M.playerName,expression:"playerName"}],staticClass:"col-12 form-control",attrs:{placeholder:"Enter Your Name"},domProps:{value:M.playerName},on:{keyup:function(L){if(!("button"in L)&&M._k(L.keyCode,"enter",13))return null;M.newGame(L)},input:function(L){L.target.composing||(M.playerName=L.target.value)}}})]),t("button",{key:"create",staticClass:"btn b1 btn-light",on:{click:M.newGame}},[M._v("Create")]),t("button",{staticClass:"btn",on:{click:function(L){M.vNew=!1}}},[M._v("Back")])]):M.vJoin?t("form",{on:{"~submit":function(L){L.preventDefault(),M.joinGame(L)}}},[t("div",{staticClass:"form-group row"},[t("input",{directives:[{name:"model",rawName:"v-model",value:M.code,expression:"code"}],staticClass:"col-12 form-control",attrs:{placeholder:"Enter the Village Code"},domProps:{value:M.code},on:{input:function(L){L.target.composing||(M.code=L.target.value)}}})]),t("div",{staticClass:"form-group row"},[t("input",{directives:[{name:"model",rawName:"v-model",value:M.playerName,expression:"playerName"}],staticClass:"col-12 form-control",attrs:{placeholder:"Enter Your Name"},domProps:{value:M.playerName},on:{input:function(L){L.target.composing||(M.playerName=L.target.value)}}})]),t("input",{staticClass:"btn b1 btn-light",attrs:{type:"submit",value:"Join"},on:{click:M.joinGame}}),t("div",{staticClass:"btn",on:{click:function(L){M.vJoin=!1}}},[M._v("Back")])]):t("div",[t("button",{staticClass:"btn b1 btn-light",on:{click:function(L){M.vNew=!M.vNew}}},[M._v("New Village")]),t("button",{staticClass:"btn",on:{click:function(L){M.vJoin=!M.vJoin}}},[M._v("Join Village")])])])},staticRenderFns:[]}},160:function(M,L,N){M.exports={render:function(){var M=this,L=M.$createElement,t=M._self._c||L;return t("div",[M.playerName?t("section",{staticClass:"waiting"},[t("img",{staticClass:"torch",attrs:{src:N(35)}}),t("h1",[M._v("Waiting for Players...")]),t("h2",[M._v("Village Code: "),t("b",{staticClass:"code"},[M._v(M._s(M.code))])]),t("hr"),t("div",{staticClass:"players"},M._l(M.room.players,function(L,N){return t("p",[t("b",[M._v(M._s(N+1))]),M._v("    "+M._s(L))])})),t("hr"),t("button",{staticClass:"btn b1 btn-light",on:{click:M.start}},[M._v("Start Game")]),t("button",{staticClass:"btn",on:{click:M.leave}},[M._v("Leave Game")])]):t("section",{staticClass:"waiting"},[t("img",{staticClass:"torch",attrs:{src:N(35)}}),t("h1",[M._v("Welcome to Werewolf Village!")]),t("h2",[M._v("Please, enter your name to join "),t("b",[M._v(M._s(M.code))]),M._v(".")]),t("br"),t("div",{staticClass:"form-group row"},[t("input",{directives:[{name:"model",rawName:"v-model",value:M.newName,expression:"newName"}],staticClass:"col-12 form-control",attrs:{placeholder:"Enter Your Name"},domProps:{value:M.newName},on:{keyup:function(L){if(!("button"in L)&&M._k(L.keyCode,"enter",13))return null;M.join(L)},input:function(L){L.target.composing||(M.newName=L.target.value)}}})]),t("button",{staticClass:"btn b1 btn-light",on:{click:M.join}},[M._v("Join")])])])},staticRenderFns:[]}},161:function(M,L){M.exports={render:function(){var M=this,L=M.$createElement,N=M._self._c||L;return N("main",[N("router-view")],1)},staticRenderFns:[]}},162:function(M,L){M.exports={render:function(){var M=this,L=M.$createElement,N=M._self._c||L;return N("div",{staticClass:"container"},[M.isWaiting?N("wolf-wait",{attrs:{code:M.$route.params.room}}):N("section",{staticClass:"gameplay"},[N("div",{staticClass:"z1"},[N("div",{staticClass:"players"},[N("p",[M._v("Players:")]),M._l(M.room.players,function(L){return N("span",[M._v(M._s(L)+" ")])})],2)]),N("div",{staticClass:"leave"},[N("button",{staticClass:"btn b1",on:{click:M.leave}},[M._v("Leave Game")]),N("button",{staticClass:"btn b1",on:{click:M.end}},[M._v("End Game")])])])],1)},staticRenderFns:[]}},166:function(M,L){},18:function(M,L,N){"use strict";var t=N(134),j=N.n(t),i=N(128),w=N.n(i),u=N(132),D=N.n(u),e=N(148),s=N.n(e),o=s()("http://localhost:3005",{transports:["websocket"]});L.a=j()().configure(D()(o)).configure(w()())},35:function(M,L){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNCOENCQ0QiIGQ9Ik0xMDkuMTc4LDExMy42NzljMCw1LjYyNS0yMS42NzUsOS44MTMtNDgsOS44MTNjLTI2LjMyNiwwLTQ3LjMzNS00LjE4OC00Ny4zMzUtOS44MTMNCgkJYzAtNS42MjYsMjEuMzQxLTEwLjE4OCw0Ny42NjctMTAuMTg4Qzg3LjgzNSwxMDMuNDkxLDEwOS4xNzgsMTA4LjA1MywxMDkuMTc4LDExMy42Nzl6Ii8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM3LjY5MywxMDkuNzY3YzAsMy44OTEsNS4xMTYsNy4wNDUsMjMuMDE1LDcuMDQ1YzE3Ljg5OSwwLDIzLjAxNi0zLjE1NCwyMy4wMTYtNy4wNDVsNy41MTUtNTQuOTU1DQoJCWMwLDMuODkyLTEyLjYzMSw3LjA0Ni0zMC41Myw3LjA0NmMtMTcuODk4LDAtMzAuNTMtMy4xNTQtMzAuNTMtNy4wNDZMMzcuNjkzLDEwOS43Njd6Ii8+DQoJPHBhdGggZmlsbD0iI0IyRURBNiIgZD0iTTM3LjY5MywxMDkuNzY3YzAsMy44OTEsNS4xMTYsNy4wNDUsMjMuMDE1LDcuMDQ1YzE3Ljg5OSwwLDIzLjAxNi0zLjE1NCwyMy4wMTYtNy4wNDVsMi44MTctMjQuODk1DQoJCWMwLDMuODkyLTguODczLDcuMDQ2LTI2Ljc3Myw3LjA0NmMtMTcuODk4LDAtMjQuODkzLTMuMTU0LTI0Ljg5My03LjA0NkwzNy42OTMsMTA5Ljc2N3oiLz4NCgk8cGF0aCBmaWxsPSIjM0M2NjNFIiBkPSJNNjAuNzA4LDExOC44MTFjLTEwLjY3MywwLTI0Ljg0LTAuOTI2LTI1LjAxMy04Ljg5N2wtNy40MTctNTQuMjM2Yy0wLjA2Ni0wLjI4NS0wLjEtMC41NzYtMC4xLTAuODY2DQoJCWMwLTEuMDUyLDAuODE1LTEuOTI0LDEuODY0LTEuOTk1YzEuMDU3LTAuMDY3LDEuOTc1LDAuNjgyLDIuMTE3LDEuNzI0bDAuMDQyLDAuMzAzYzAuNzY3LDEuNzM4LDkuOTU5LDUuMDE1LDI4LjUwNyw1LjAxNQ0KCQljMTguNTQ4LDAsMjcuNzM5LTMuMjc1LDI4LjUwNy01LjAxNWwwLjA0Mi0wLjMwMmMwLjE0My0xLjA0MywxLjA2Ny0xLjc5MywyLjExNy0xLjcyNWMxLjA0OSwwLjA3MSwxLjg2NCwwLjk0MywxLjg2NCwxLjk5NQ0KCQljMCwwLjI5LTAuMDM0LDAuNTgxLTAuMSwwLjg2NmwtNy40MTYsNTQuMjM2Qzg1LjU0OSwxMTcuODg2LDcxLjM4MSwxMTguODExLDYwLjcwOCwxMTguODExeiBNMzIuOTExLDYwLjAzM2w2Ljc2NCw0OS40NjINCgkJYzAuMDEyLDAuMDksMC4wMTksMC4xODEsMC4wMTksMC4yNzFjMCwxLjE4NCwxLjUxNiw1LjA0NSwyMS4wMTUsNS4wNDVjMTkuNSwwLDIxLjAxNi0zLjg2MSwyMS4wMTYtNS4wNDUNCgkJYzAtMC4wOTEsMC4wMDYtMC4xODIsMC4wMTktMC4yNzFsNi43NjMtNDkuNDYzYy04LjA1LDMuNTk1LTIzLjkxNiwzLjgyNC0yNy43OTcsMy44MjRDNTYuODI3LDYzLjg1Nyw0MC45NjEsNjMuNjI4LDMyLjkxMSw2MC4wMzN6DQoJCSIvPg0KCTxlbGxpcHNlIGZpbGw9IiNCMkVEQTYiIGN4PSI2MC43MDgiIGN5PSI4NC44NzIiIHJ4PSIyNi4zMDMiIHJ5PSI3LjA0NiIvPg0KCTxwYXRoIGZpbGw9IiMzQzY2M0UiIGQ9Ik02MC43MDgsOTMuOTE4Yy05Ljc4OSwwLTI4LjMwMy0xLjg5MS0yOC4zMDMtOS4wNDZjMC03LjE1NCwxOC41MTQtOS4wNDUsMjguMzAzLTkuMDQ1DQoJCWM5Ljc4OSwwLDI4LjMwMywxLjg5MSwyOC4zMDMsOS4wNDVDODkuMDExLDkyLjAyNyw3MC40OTcsOTMuOTE4LDYwLjcwOCw5My45MTh6IE02MC43MDgsNzkuODI3DQoJCWMtMTYuMTg3LDAtMjQuMDQ4LDMuNjYyLTI0LjMwMyw1LjA1NGMwLjI1NSwxLjM3NCw4LjExNiw1LjAzNywyNC4zMDMsNS4wMzdzMjQuMDQ4LTMuNjYzLDI0LjMwMy01LjA1NQ0KCQlDODQuNzU2LDgzLjQ4OSw3Ni44OTUsNzkuODI3LDYwLjcwOCw3OS44Mjd6Ii8+DQoJPGNpcmNsZSBmaWxsPSIjM0M2NjNFIiBjeD0iNTIuMjUzIiBjeT0iMTAyLjI1MSIgcj0iMy4yODgiLz4NCgk8Y2lyY2xlIGZpbGw9IiMzQzY2M0UiIGN4PSI2Ni4xODkiIGN5PSIxMDkuMjk2IiByPSIyLjM0OSIvPg0KCTxjaXJjbGUgZmlsbD0iIzNDNjYzRSIgY3g9IjY4LjIyMyIgY3k9Ijk5LjQzMyIgcj0iMi4zNDgiLz4NCgk8cGF0aCBvcGFjaXR5PSIwLjIiIGZpbGw9IiMzQzY2M0UiIGQ9Ik03OS4wMywxMTcuNDYzYy0wLjEzNiwwLTAuMjcyLTAuMDA5LTAuNDEtMC4wMjdjLTEuNjQyLTAuMjI1LTIuNzktMS43MzctMi41NjYtMy4zNzkNCgkJbDcuNTE1LTU0Ljk1NGMwLjIyNS0xLjY0MiwxLjc0NC0yLjc4OCwzLjM3OC0yLjU2NmMxLjY0MiwwLjIyNSwyLjc5MSwxLjczNywyLjU2NiwzLjM3OWwtNy41MTUsNTQuOTU0DQoJCUM4MS43OTMsMTE2LjM3Myw4MC41MDYsMTE3LjQ2Myw3OS4wMywxMTcuNDYzeiIvPg0KCTxwYXRoIGZpbGw9IiMzQzY2M0UiIGQ9Ik00OS44MzQsMjUuNDAyYy0wLjMyMSwwLTAuNjQzLTAuMDUyLTAuOTUzLTAuMTU1bC0xNy42NTYtNS45MTFjLTEuNTcxLTAuNTI2LTIuNDE4LTIuMjI2LTEuODkyLTMuNzk3DQoJCWMwLjUyNi0xLjU3MSwyLjIyNi0yLjQxNiwzLjc5Ny0xLjg5M2wxNS4xNjQsNS4wNzZjMy4xMTktNS4yNjcsMTIuNzQ4LTE2LjAzMiwzOC45NzgtMTUuMjNjMS42NTYsMC4wNTIsMi45NTYsMS40MzcsMi45MDUsMy4wOTMNCgkJYy0wLjA1MiwxLjY1NS0xLjQzMywyLjk1OC0zLjA5MiwyLjkwNWMtMjkuMzg3LTAuOTE3LTM0LjM0MywxMy42NjktMzQuMzksMTMuODE2Yy0wLjI0MiwwLjc2Ny0wLjc4MywxLjQwNC0xLjUsMS43Nw0KCQlDNTAuNzY5LDI1LjI5Myw1MC4zMDIsMjUuNDAyLDQ5LjgzNCwyNS40MDJ6Ii8+DQoJPHBhdGggZmlsbD0iI0IyRURBNiIgZD0iTTYxLjE3OCwzNi4wMjN2LTguNDU0YzAtNS45NjcsNC44MzYtMTAuODAzLDEwLjgwMy0xMC44MDNsMCwwYzUuOTY3LDAsMTAuODA0LDQuODM2LDEwLjgwNCwxMC44MDN2MTAuODAzDQoJCUw2MS4xNzgsMzYuMDIzeiIvPg0KCTxwYXRoIGZpbGw9IiMzQzY2M0UiIGQ9Ik04Mi43ODQsNDAuMzcyYy0wLjA3MiwwLTAuMTQ0LTAuMDA0LTAuMjE2LTAuMDEybC0yMS42MDYtMi4zNDljLTEuMDE1LTAuMTEtMS43ODQtMC45NjgtMS43ODQtMS45ODgNCgkJdi04LjQ1NGMwLTcuMDU5LDUuNzQzLTEyLjgwMywxMi44MDMtMTIuODAzYzcuMDYsMCwxMi44MDQsNS43NDMsMTIuODA0LDEyLjgwM3YxMC44MDNjMCwwLjU2OC0wLjI0MiwxLjEwOS0wLjY2NCwxLjQ4OA0KCQlDODMuNzUxLDQwLjE5MSw4My4yNzUsNDAuMzcyLDgyLjc4NCw0MC4zNzJ6IE02My4xNzgsMzQuMjI5bDE3LjYwNiwxLjkxM3YtOC41NzNjMC00Ljg1NC0zLjk0OS04LjgwMy04LjgwNC04LjgwMw0KCQljLTQuODU0LDAtOC44MDMsMy45NDktOC44MDMsOC44MDNWMzQuMjI5eiIvPg0KCTxwYXRoIGZpbGw9IiNCMkVEQTYiIGQ9Ik0zMC4xNzgsNDEuNDkxYzAtMy44OTIsMTIuNjMyLTYuODc3LDMwLjUzLTYuODc3YzE3Ljg5OSwwLDMwLjUzLDMuMTU0LDMwLjUzLDcuMDQ2djEzLjE1MQ0KCQljMCwzLjg5Mi0xMi42MzEsNy4wNDYtMzAuNTMsNy4wNDZjLTE3Ljg5OCwwLTMwLjUzLTMuNDc1LTMwLjUzLTcuMzY2VjQxLjQ5MXoiLz4NCgk8cGF0aCBmaWxsPSIjM0M2NjNFIiBkPSJNNjAuNzA4LDYzLjg1N2MtMTIuMDgyLDAtMzIuNTMtMS45NzMtMzIuNTMtOS4zNjZ2LTEzYzAtOC40NDksMjcuMDk4LTguODc3LDMyLjUzLTguODc3DQoJCWM1LjQzMiwwLDMyLjUzLDAuNDM3LDMyLjUzLDkuMDQ2djEzLjE1MUM5My4yMzgsNjMuNDIxLDY2LjE0LDYzLjg1Nyw2MC43MDgsNjMuODU3eiBNNjAuNzA4LDM2LjYxNA0KCQljLTE4Ljc5MiwwLTI3Ljk5MSwzLjI2MS0yOC41MzYsNC45MjRsMC4wMDYsMTIuOTUzYzAuNDQ1LDEuNTUzLDkuMjkyLDUuMzY2LDI4LjUzLDUuMzY2YzE4LjgxMywwLDI4LTMuMzcsMjguNTM1LTUuMDg5DQoJCUw4OS4yMzgsNDEuNjZDODguNzA4LDM5Ljk4NCw3OS41MjEsMzYuNjE0LDYwLjcwOCwzNi42MTR6Ii8+DQoJPHBhdGggZmlsbD0iIzNDNjYzRSIgZD0iTTYwLjcwOCw1MC43MDVjLTUuNDMyLDAtMzIuNTMtMC40MzctMzIuNTMtOS4wNDVjMC0xLjEwNCwwLjg5NS0yLDItMmMxLjEwNCwwLDIsMC44OTYsMiwyDQoJCWMwLjUzLDEuNjc2LDkuNzE4LDUuMDQ1LDI4LjUzLDUuMDQ1YzE4LjgxMywwLDI4LTMuMzY5LDI4LjUzNS01LjA4OGMwLTEuMTA0LDAuODkzLTEuOTc5LDEuOTk4LTEuOTc5czEuOTk3LDAuOTE3LDEuOTk3LDIuMDIxDQoJCUM5My4yMzgsNTAuMjY4LDY2LjE0LDUwLjcwNSw2MC43MDgsNTAuNzA1eiIvPg0KCTxwYXRoIGZpbGw9IiNCMkVEQTYiIGQ9Ik01My42NjIsMzAuODU3YzAsMy4xMTItMi41MjMsNS42MzYtNS42MzYsNS42MzZsMCwwYy0zLjExMiwwLTUuNjM3LTIuNTI0LTUuNjM3LTUuNjM2di05LjM5NA0KCQljMC0zLjExMiwyLjUyNC01LjYzNiw1LjYzNy01LjYzNmwwLDBjMy4xMTIsMCw1LjYzNiwyLjUyMyw1LjYzNiw1LjYzNlYzMC44NTd6Ii8+DQoJPHBhdGggZmlsbD0iIzNDNjYzRSIgZD0iTTQ4LjAyNiwzOC40OTNjLTQuMjExLDAtNy42MzctMy40MjYtNy42MzctNy42MzZ2LTkuMzk0YzAtNC4yMSwzLjQyNi03LjYzNiw3LjYzNy03LjYzNg0KCQljNC4yMSwwLDcuNjM2LDMuNDI2LDcuNjM2LDcuNjM2djkuMzk0QzU1LjY2MiwzNS4wNjcsNTIuMjM3LDM4LjQ5Myw0OC4wMjYsMzguNDkzeiBNNDguMDI2LDE3LjgyNw0KCQljLTIuMDA1LDAtMy42MzcsMS42MzEtMy42MzcsMy42MzZ2OS4zOTRjMCwyLjAwNSwxLjYzMSwzLjYzNiwzLjYzNywzLjYzNmMyLjAwNSwwLDMuNjM2LTEuNjMxLDMuNjM2LTMuNjM2di05LjM5NA0KCQlDNTEuNjYyLDE5LjQ1OCw1MC4wMzEsMTcuODI3LDQ4LjAyNiwxNy44Mjd6Ii8+DQoJPHBhdGggZmlsbD0iI0IyRURBNiIgZD0iTTYxLjE3OCwyNC4yODFjLTEwLjM0MiwwLTE5LjExNCw2LjY4Ny0yMi4yNDksMTUuOTdjMCwxLjI5NywxMC4wMjYsMi4zNDksMjIuMzk2LDIuMzQ5DQoJCWMxMi4zNywwLDIyLjEwMi0xLjA1MiwyMi4xMDItMi4zNDlDODAuMjkyLDMwLjk2OCw3MS41MTgsMjQuMjgxLDYxLjE3OCwyNC4yODF6Ii8+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQxLjU5NCw0My42NjFjLTAuMjEyLDAtMC40MjgtMC4wMzQtMC42NC0wLjEwNmMtMS4wNDctMC4zNTQtMS42MDgtMS40ODgtMS4yNTUtMi41MzQNCgkJYzMuNTg5LTEwLjYyNywxNy40NzItMTcuNzY2LDI4LjE4Ny0xNy43NjZjMS4xMDQsMCwyLDAuODk2LDIsMnMtMC44OTYsMi0yLDJjLTkuMTE4LDAtMjEuNDg5LDYuNDM0LTI0LjM5NywxNS4wNDUNCgkJQzQzLjIwNyw0My4xMzUsNDIuNDI5LDQzLjY2MSw0MS41OTQsNDMuNjYxeiIvPg0KCTxwYXRoIGZpbGw9IiMzQzY2M0UiIGQ9Ik02MS4zMjUsNDQuNmMtMjQuMzk2LDAtMjQuMzk2LTIuODI5LTI0LjM5Ni00LjM0OWMwLTAuMjE4LDAuMDM2LTAuNDM0LDAuMTA1LTAuNjQNCgkJYzMuNS0xMC4zNjYsMTMuMjAzLTE3LjMzLDI0LjE0NC0xNy4zM3MyMC42NDQsNi45NjQsMjQuMTQ0LDE3LjMzYzAuMDY5LDAuMjA2LDAuMTA1LDAuNDIyLDAuMTA1LDAuNjQNCgkJQzg1LjQyNyw0MS43Nyw4NS40MjcsNDQuNiw2MS4zMjUsNDQuNnogTTQxLjQzMiwzOS4yOTljMi44MjUsMC42MjcsMTAuMDM0LDEuMzAxLDE5Ljg5MywxLjMwMWMxMC4wOTQsMCwxNi45MS0wLjY3OCwxOS42MDQtMS4yODgNCgkJYy0zLjM1OC03Ljg1OS0xMS4wOTUtMTMuMDMtMTkuNzUxLTEzLjAzQzUyLjUyNiwyNi4yODEsNDQuNzkzLDMxLjQ0Niw0MS40MzIsMzkuMjk5eiIvPg0KCTxwYXRoIGZpbGw9IiMzQzY2M0UiIGQ9Ik00OC45NjYsMTUuODI3YzMuMTEyLDAsNS42MzYsMi41MjMsNS42MzYsNS42MzZ2NC4wNTJjMi4zNi0wLjc5Nyw0Ljg4Ny0xLjIzMyw3LjUxNi0xLjIzMw0KCQljMC4xNzEsMCwwLjMzNywwLjAxNywwLjUwNiwwLjAyMWMxLjM4NS00LjM2OSw1LjQ3LTcuNTM1LDEwLjI5Ny03LjUzNWM1Ljk2NywwLDEwLjgwNCw0LjgzNiwxMC44MDQsMTAuODAzdjkuMTMzDQoJCWM1LjMzMywxLjI3Myw4LjQ1NCwzLjAyNCw4LjQ1NCw0Ljk1OHYxMy4xNTFjMCwwLjE0Ny0wLjAyMywwLjI5NC0wLjA2LDAuNDM4bC03LjQ1Niw1NC41MTdjMCwzLjg5MS01LjExNSw3LjA0NS0yMy4wMTUsNy4wNDUNCgkJcy0yMy4wMTUtMy4xNTQtMjMuMDE1LTcuMDQ1bC03LjQ1NS01NC4yNzVjMCwwLDAtMC44NTIsMC0xdi0xM2MwLTIuMTc1LDMuODg5LTMuOTUsMTAuNDk1LTUuMjQzDQoJCWMwLjYyNS0xLjEwNiwxLjMzNS0yLjE1NiwyLjEyNS0zLjE0MmMtMC4zLTAuNjg5LTAuNDY5LTEuNDQ4LTAuNDY5LTIuMjQ4di05LjM5NEM0My4zMjksMTguMzUxLDQ1Ljg1MiwxNS44MjcsNDguOTY2LDE1LjgyNw0KCQkgTTQ4Ljk2NiwxMS44MjdjLTUuMzEzLDAtOS42MzcsNC4zMjItOS42MzcsOS42MzZ2OS4zOTRjMCwwLjQ4MSwwLjAzNSwwLjk1NiwwLjEwNSwxLjQyNWMtMC4wOTEsMC4xMzMtMC4xODEsMC4yNjctMC4yNjksMC40MDENCgkJYy01LjkxMSwxLjMwOS0xMS45ODcsMy41NzgtMTEuOTg3LDguODA4djEzdjFjMCwwLjE4MiwwLjAxMiwwLjM2NCwwLjAzNywwLjU0NGw3LjQyNCw1NC4wNDZjMC4wOTgsMi43MjQsMS41MTQsNi4yODQsNy40MjYsOC40MjgNCgkJYzQuMjc0LDEuNTUsMTAuNjgsMi4zMDMsMTkuNTgzLDIuMzAzczE1LjMwOS0wLjc1MywxOS41ODMtMi4zMDNjNS45MTMtMi4xNDUsNy4zMjktNS43MDUsNy40MjYtOC40MjlsNy40MDItNTQuMTIyDQoJCWMwLjA4LTAuMzg5LDAuMTE5LTAuNzY2LDAuMTE5LTEuMTQ2VjQxLjY2YzAtNC41NDQtNC44MTktNi44NTMtOC40NTQtOC4wMTV2LTYuMDc2YzAtOC4xNjItNi42NDEtMTQuODAzLTE0LjgwNC0xNC44MDMNCgkJYy01LjQ3MywwLTEwLjM2NywyLjk1OC0xMi45MzcsNy41OTdjLTAuNDc4LDAuMDM3LTAuOTU0LDAuMDg3LTEuNDI4LDAuMTQ4QzU4LjA3NiwxNS42NDMsNTMuOTU4LDExLjgyNyw0OC45NjYsMTEuODI3DQoJCUw0OC45NjYsMTEuODI3eiIvPg0KPC9nPg0KPC9zdmc+DQo="},61:function(M,L,N){"use strict";var t=N(19),j=N(163),i=N(158),w=N.n(i),u=N(157),D=N.n(u);t.a.use(j.a),L.a=new j.a({routes:[{path:"/",name:"Landing",component:w.a},{path:"/:room",name:"Game",component:D.a}]})},62:function(M,L,N){"use strict";var t=N(75),j=N.n(t),i=N(74),w=N.n(i),u=N(19),D=N(36);u.a.use(D.a);var e=new D.a.Store({state:{room:{id:"",players:[]},playerName:null,isWaiting:!0},mutations:{setName:function(M,L){M.playerName=L},enterRoom:function(M,L){M.room=L},toggleWait:function(M,L){M.isWaiting=L||!M.isWaiting},addPlayers:function(M,L){M.room=w()({},M.room,{players:[].concat(j()(M.room.players),[L])})}}});L.a=e},64:function(M,L,N){N(122);var t=N(17)(N(68),N(161),null,null);M.exports=t.exports},67:function(M,L,N){"use strict";Object.defineProperty(L,"__esModule",{value:!0});var t=N(19),j=N(63),i=N.n(j),w=N(64),u=N.n(w),D=N(61),e=N(62),s=N(18);t.a.config.productionTip=!1,t.a.use(i.a,s.a),window.api=s.a,L.default=new t.a({el:"#app",router:D.a,store:e.a,template:"<App/>",components:{App:u.a}})},68:function(M,L,N){"use strict";Object.defineProperty(L,"__esModule",{value:!0}),L.default={name:"app"}},69:function(M,L,N){"use strict";Object.defineProperty(L,"__esModule",{value:!0});var t=N(36),j=N(18);L.default={name:"wolf-wait",mounted:function(){var M=this;j.a.io.on("room-"+this.code,function(L){var N=L.name;M.$store.commit("addPlayers",N)})},props:["code"],computed:N.i(t.b)(["playerName","room"]),methods:{start:function(){this.$store.commit("toggleWait")},join:function(){this.$store.commit("setName",this.newName),this.$store.commit("enterRoom",{id:this.code,players:[this.playerName]})},leave:function(){this.$router.push("/")}}}},70:function(M,L,N){"use strict";function t(M){confirm("Are you sure you want to Force Quit?")&&(M.$store.commit("toggleWait",!0),M.$router.push("/"))}Object.defineProperty(L,"__esModule",{value:!0});var j=N(36),i=N(156),w=N.n(i);L.default={name:"wolf-game",computed:N.i(j.b)(["isWaiting","room"]),methods:{leave:function(){t(this)},end:function(){t(this)}},components:{"wolf-wait":w.a}}},71:function(M,L,N){"use strict";function t(M){M.$store.commit("setName",M.playerName),M.$store.commit("toggleWait",!0)}Object.defineProperty(L,"__esModule",{value:!0});var j=N(18);L.default={name:"landing",data:function(){return{code:"",playerName:"",vNew:!1,vJoin:!1}},methods:{newGame:function(){var M=this,L=this.playerName;t(this),j.a.service("game").create({playerName:L}).then(function(N){j.a.io.emit("joinRoom",{room:N.id,name:L}),M.$store.commit("enterRoom",N),M.$router.push("/"+N.id)})},joinGame:function(){t(this),j.a.io.emit("joinRoom",{room:this.code,name:this.playerName}),this.$store.commit("enterRoom",{id:this.code,players:[this.playerName]}),this.$router.push("/"+this.code)}}}}},[67]);
//# sourceMappingURL=app.e0b2180d08f0656c5f1d.js.map