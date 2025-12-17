console.log('LocalStorage usage:');
console.log('Total items:', localStorage.length);
let totalSize = 0;
for(let i=0; i<localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const size = new Blob([value]).size / 1024 / 1024; // 转换为MB
    totalSize += size;
    console.log(`${key}: ${size.toFixed(2)} MB`);
}
console.log(`Total: ${totalSize.toFixed(2)} MB`);
