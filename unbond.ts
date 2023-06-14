import fs from "fs";
import path from "path";
import { FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus } from "fireblocks-sdk";
import { DOTStaker } from "./src/dot-staker";

const apiSecret = fs.readFileSync(path.resolve(__dirname, "./fireblocks_secret.key"), "utf8");
const apiKey = "45c887d5-bb2b-4700-8ece-4293993ff4c4";
const fireblocks = new FireblocksSDK(apiSecret, apiKey);
const dotStaker = new DOTStaker(fireblocks, false);

(async () => {

    const vaultAccountId = "11"; // This is the stash vault account ID
    const amount = 192.3274;   // This is the amount of DOT to bond
    const controllerAddress = "152un8U6vyiVJKUvsAQcX1hfscSUtrAq5dLVWM6kdzp4szgc"; // This is the address that will be able to control the staking
    const rewardAddress = ""; // Optional: This is the address that will receive the rewards

    await dotStaker.unbond(vaultAccountId, amount);

})().catch(console.log);