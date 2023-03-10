const { ethers, network } = require("hardhat")
const { moveBlocks } = require("../utils/move-blocks")

async function mintAndList() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const basicNft = await ethers.getContract("BasicNft")
    console.log("Minting...")
    const mintTx = await basicNft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    const tokenId = await mintTxReceipt.events[0].args.tokenId
    console.log(`Got token Id ${tokenId}`)
    console.log(`NFT Address ${basicNft.address}`)

    if ((network.config.chainId = 31337)) {
        await moveBlocks(2, (sleepAmount = 1000))
    }
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
