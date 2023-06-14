import fs from "fs";
import path from "path";
import { FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus } from "fireblocks-sdk";
import { DOTStaker } from "./src/dot-staker";

const apiSecret = fs.readFileSync(path.resolve(__dirname, "./fireblocks_secret.key"), "utf8");
const apiKey = "45c887d5-bb2b-4700-8ece-4293993ff4c4";
const fireblocks = new FireblocksSDK(apiSecret, apiKey);
const dotStaker = new DOTStaker(fireblocks, false);

(async () => {

    const vaultAccountId = "8";  // This is the controller vault account ID
    const proxyAddress = "14dMMtV91EpqumTuYwtsp3JUKdicUJrzPwBST3o4s51TQxb6"; // This is the proxy address

    await dotStaker.addProxy(vaultAccountId, proxyAddress);

})().catch(console.log);