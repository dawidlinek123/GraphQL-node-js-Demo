 Jeśli mamy błąd z cache to musimy nadpisać plik node_modules/apollo-server-core/dist/plugin/cacheControl/index.js -> linijkę 118 na policyIfCacheable = {maxAge:60,scope:'PUBLIC'}
