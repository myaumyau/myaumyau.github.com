function FindProxyForURL(url, host) {
  // 艦これ用
  if (/^125\.6\.187\.253/.test(host)) {
     return "PROXY localhost:88888; DIRECT";
  }
  return "DIRECT";
}
