/** @format */

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("calculator.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.Calculator;

function add(call, callback) {
  const result = call.request.num1 + call.request.num2;
  callback(null, { result });
}

function subtract(call, callback) {
  const result = call.request.num1 - call.request.num2;
  callback(null, { result });
}

function multiply(call, callback) {
  const result = call.request.num1 * call.request.num2;
  callback(null, { result });
}

function divide(call, callback) {
  const result = call.request.num1 / call.request.num2;
  callback(null, { result });
}

const server = new grpc.Server();
server.addService(calculatorPackage.service, {
  Add: add,
  Subtract: subtract,
  Multiply: multiply,
  Divide: divide,
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("gRPC server running on port 50051");
    server.start();
  }
);
