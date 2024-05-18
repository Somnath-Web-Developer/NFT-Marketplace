Sure, I'll update the README with the given language distribution. Here's the revised README file:

# NFT Marketplace Project

## Overview

This project is a website for creating, buying, selling, and minting your own non-fungible tokens (NFTs). It's designed as a social media platform where users can not only trade NFTs but also engage in discussions about them. The project utilizes the ICP blockchain and DFINITY protocol for decentralized operations, leveraging Motoko for smart contracts and the MERN stack (MongoDB, Express, React, Node.js) for the overall web application.

## Tech Stack

- **Motoko**: Used for writing smart contracts on the Internet Computer.
- **MERN Stack**: 
  - **MongoDB**: Database for storing user and NFT data.
  - **Express.js**: Backend framework for handling API requests.
  - **React.js**: Frontend library for building user interfaces.
  - **Node.js**: Runtime for server-side JavaScript execution.
- **ICP Blockchain**: Provides the decentralized infrastructure.
- **DFINITY Protocol**: Used for deploying and managing canisters (smart contracts).

## Language Distribution

```
JavaScript: 58.0%
CSS: 29.7%
Motoko: 11.4%
HTML: 0.9%
```

## Installation and Running the Project

1. **Start local DFX**

   ```sh
   dfx start --clean
   ```

2. **Run NPM server for frontend**

   ```sh
   npm start
   ```

3. **Run NPM server for backend**

   ```sh
   npm run dev
   ```

4. **Deploy Canisters**

   ```sh
   dfx deploy --argument='("CryptoDunks #123", principal "s72bo-wblgv-ks5pj-vtj4p-4vpwr-6wefz-5h2eo-o3nn3-4ifdp-m47b2-nae", (vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 10; 0; 0; 0; 10; 8; 6; 0; 0; 0; 141; 50; 207; 189; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 0; 68; 101; 88; 73; 102; 77; 77; 0; 42; 0; 0; 0; 8; 0; 1; 135; 105; 0; 4; 0; 0; 0; 1; 0; 0; 0; 26; 0; 0; 0; 0; 0; 3; 160; 1; 0; 3; 0; 0; 0; 1; 0; 1; 0; 0; 160; 2; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 160; 3; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 0; 0; 0; 0; 59; 120; 184; 245; 0; 0; 0; 113; 73; 68; 65; 84; 24; 25; 133; 143; 203; 13; 128; 48; 12; 67; 147; 94; 97; 30; 24; 0; 198; 134; 1; 96; 30; 56; 151; 56; 212; 85; 68; 17; 88; 106; 243; 241; 235; 39; 42; 183; 114; 137; 12; 106; 73; 236; 105; 98; 227; 152; 6; 193; 42; 114; 40; 214; 126; 50; 52; 8; 74; 183; 108; 158; 159; 243; 40; 253; 186; 75; 122; 131; 64; 0; 160; 192; 168; 109; 241; 47; 244; 154; 152; 112; 237; 159; 252; 105; 64; 95; 48; 61; 12; 3; 61; 167; 244; 38; 33; 43; 148; 96; 3; 71; 8; 102; 4; 43; 140; 164; 168; 250; 23; 219; 242; 38; 84; 91; 18; 112; 63; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130;}))'
   ```

5. **Head to localhost**

   Open [http://localhost:8080/](http://localhost:8080/) in your browser.

## Project Features

- **Create NFTs**: Users can mint new NFTs from images in .png format.
- **Sell NFTs**: List NFTs for sale. Once listed, the owner cannot rebuy their own NFT.
- **Buy NFTs**: Purchase NFTs listed by other users.
- **View NFTs**: Display owned NFTs and those available for sale, with listed NFTs shown as faded.
- **Social Interaction**: Engage in discussions about NFTs within the community.

## Screenshots

### NFT Owner's Page
<img width="1439" alt="Screenshot 2024-02-22 at 9 52 40 PM" src="https://github.com/Somnath-Web-Developer/NFT-Marketplace/assets/135858837/850b1e74-0d0b-4855-8856-57e5ffd9cf6d">
*Showing the NFTs that belong to the owner. The NFTs listed on the website for sale are shown as faded.*

### NFT Trade Page
<img width="1440" alt="Screenshot 2024-02-22 at 9 55 16 PM" src="https://github.com/Somnath-Web-Developer/NFT-Marketplace/assets/135858837/298bcec3-e253-4655-83e6-f6a1cf9169d5">
*Here the NFTs to trade are available.*
*Note: Owner can't rebuy their own NFT once put to sell.*

### Mint NFT Page
<img width="1440" alt="Screenshot 2024-02-22 at 9 58 55 PM" src="https://github.com/Somnath-Web-Developer/NFT-Marketplace/assets/135858837/d30ea612-bb8a-4585-bc70-5ed4e62844bc">
*This is the page where an NFT can be minted in the form of an image of .png format.*
