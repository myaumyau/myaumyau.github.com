function FindProxyForURL(url, host) {
  if (/^125\.6\.187\.253/.test(host)) {
     return "PROXY localhost:8888; DIRECT";
  }
  return "DIRECT";
}
