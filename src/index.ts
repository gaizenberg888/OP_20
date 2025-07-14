import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { MyToken } from './contracts/MyToken';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';

// DO NOT TOUCH TO THIS.
Blockchain.contract = () => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.

    return new MyToken(const name = "zakonik";
const symbol = "ZKN";
const decimals: u8 = 8;
const maxSupply = u128.from("100000000000000"); // 1_000_000 * 10^8
);
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
