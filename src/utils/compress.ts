import pako from 'pako';

// Base64 解码函数
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
export function compressData(data) {
  const jsonString = JSON.stringify(data);
  const compressed = pako.gzip(jsonString);
  return btoa(String.fromCharCode.apply(null, new Uint8Array(compressed)));
}

export function decompressData(compressedData) {
  const compressedBytes = base64ToUint8Array(compressedData);
  const decompressed = pako.ungzip(compressedBytes, { to: 'string' });
  return JSON.parse(decompressed);
}
