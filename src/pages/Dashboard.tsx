import { useAnchorWallet } from "@solana/wallet-adapter-react";
// import { Authentication } from "./Authentication";
// import { Transfer } from "./Transfer";
// import { Account } from "./Account";
// import { Swap } from "./Swap";
import UserInitialization from "./UserInitialization";
import RewardContentCreator from "./RewardContentCreator";

export function Dashboard() {

    const anchorWallet = useAnchorWallet();

    return (
        <div>
            {
                anchorWallet?.publicKey ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>
                        Connected to wallet: <b>{anchorWallet.publicKey.toBase58()}</b>
                        </p>
                        {/* <Authentication />
                        <Transfer />
                        <Account />
                        <Swap /> */}
                        <UserInitialization/>
                        <RewardContentCreator/>
                    </div>
                ) : (
                    <div>
                    <h1>Solana React Exemple</h1>
                    <p>
                        Cliquer sur le bouton "Connect Wallet" pour connecter votre wallet Solana.
                    </p>
                    </div>
                )
            }
        </div>
    );
}
