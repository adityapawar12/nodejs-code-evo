// Creating a buffer
const buffer = new Buffer.from("Aditya", "utf-8");

// Prints out binary/Hexadecimal format of buffer
console.log(buffer);
// Prints out json which will show Unicode representation of buffers
console.log(buffer.toJSON());
// Returns the string version so basically the original string
console.log(buffer.toString());

// Writes to the buffer
buffer.write("Code");

// Buffers use specific amount of memory that's why this is happening : Codeya
console.log(buffer.toString());
