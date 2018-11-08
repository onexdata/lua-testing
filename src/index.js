var http = require("http");
var fengari = require("fengari");
var app = require("usws").listen(8001, "./../../statics");

const luaconf = fengari.luaconf;
const lua = fengari.lua;
const lauxlib = fengari.lauxlib;
const lualib = fengari.lualib;

const L = lauxlib.luaL_newstate();

lualib.luaL_openlibs(L);

lua.lua_pushliteral(L, "hello world!");

console.log("here?!!!");
//create a server object:
http
  .createServer(function(req, res) {
    res.write(`Hello World!!!?? WHAT THE
    
     <script src="https://github.com/fengari-lua/fengari-web/releases/download/v0.1.2/fengari-web.js"></script>
    <script type="application/lua">
print("hello from LUA!")
</script>
    `); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
