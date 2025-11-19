import React from 'react';
import './App.css';

// Image URLs from Figma
const imgGroup16 = "https://www.figma.com/api/mcp/asset/d3eb43fd-289b-41af-b3b4-9adf6270bb0f";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/d8e48d3c-19c6-4a5e-805a-62cd39c083ff";
const imgFrame4 = "https://www.figma.com/api/mcp/asset/a80fcfca-8c0d-47e8-aee2-e51c6e6854e5";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/281f49f0-d272-4660-a4fe-a12eba98c00a";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/ffacb35f-cb31-453f-8f8e-8c355b7b8199";
const imgVector1 = "https://www.figma.com/api/mcp/asset/a0e48e7a-7227-48fe-8084-36220b8c58e2";
const imgVector4 = "https://www.figma.com/api/mcp/asset/61edaf5c-fe4f-46c2-a351-d8fc3c36a8e4";
const imgVector7 = "https://www.figma.com/api/mcp/asset/3b5cb7f8-c250-4b71-a382-ae55cb9b9415";
const imgGroup6 = "https://www.figma.com/api/mcp/asset/a207ae19-6a47-45b5-9224-510349d5bfca";
const imgFrame5 = "https://www.figma.com/api/mcp/asset/f409fffa-2a20-4da1-9f58-c072e3a12acd";
const imgVector16 = "https://www.figma.com/api/mcp/asset/40a90bbd-dfdd-43a1-99cd-495bb5d0cd20";
const imgFrame6 = "https://www.figma.com/api/mcp/asset/c63c1149-f548-43c9-81c8-0304530467ca";
const imgVector2 = "https://www.figma.com/api/mcp/asset/a21b6d58-ba6d-4588-bbbc-7dafb4f52f9e";
const imgVector3 = "https://www.figma.com/api/mcp/asset/94192007-0bf8-4a6d-9d67-e23ecbd77bd4";
const imgVector5 = "https://www.figma.com/api/mcp/asset/1bbc6952-b4c9-47fb-9f35-117c79f6af97";
const imgVector6 = "https://www.figma.com/api/mcp/asset/da0eacc9-237f-4b01-ad5f-2ee299b705d6";
const imgVector8 = "https://www.figma.com/api/mcp/asset/ba49bfc7-b757-4a3f-b91f-32e07736cae4";
const imgVector17 = "https://www.figma.com/api/mcp/asset/ce4a61a6-988f-4a7b-a009-bd63a9ea090a";
const imgGroup5 = "https://www.figma.com/api/mcp/asset/08e0b21b-f0ec-4d16-b224-72e9e63f019b";

function App() {
  return (
    <div className="app-container" data-name="iPhone 16 Pro Max - 1" data-node-id="1:2">
      {/* Background decoration layers */}
      <div className="background-layer-1" data-node-id="3:284">
        <div className="background-image-wrapper">
          <img alt="" className="background-image" src={imgGroup16} />
        </div>
      </div>
      <div className="background-layer-2" data-node-id="3:242">
        <div className="background-image-wrapper-2">
          <img alt="" className="background-image" src={imgGroup7} />
        </div>
      </div>

      {/* Header Section */}
      <div className="header-left" data-node-id="3:16">
        <p className="header-title">CS Manicz</p>
      </div>
      <div className="header-right" data-node-id="3:18">
        <p className="header-date">{`<date>November-21<date>`}</p>
      </div>

      {/* Main Title */}
      <div className="main-title" data-node-id="3:20">
        <p>AAGAMAN</p>
        <p>2025</p>
      </div>

      {/* Welcome Badge */}
      <div className="welcome-badge" data-node-id="3:22">
        <p className="welcome-text">Welcome to the family</p>
        <div className="welcome-icon" data-node-id="3:26">
          <img alt="" className="icon-image" src={imgFrame4} />
        </div>
      </div>

      {/* Decorative Elements - Right Side */}
      <div className="decoration-right-1" data-node-id="3:51">
        <div className="decoration-image-wrapper">
          <img alt="" className="decoration-image" src={imgFrame2} />
        </div>
      </div>

      <div className="decoration-rotated">
        <div className="decoration-rotated-inner">
          <div className="decoration-group-1" data-node-id="3:50">
            <div className="decoration-image-wrapper">
              <img alt="" className="decoration-image" src={imgGroup1} />
            </div>
          </div>
        </div>
      </div>

      {/* 3D Block Letters - CS MANICZ */}
      
      {/* First row - upper right area */}
      <div className="block-container-1" data-node-id="3:148">
        <div className="block-image-wrapper">
          <img alt="" className="block-image" src={imgVector1} />
        </div>
      </div>

      {/* C Letter Block */}
      <div className="letter-group-c" data-node-id="3:247">
        <div className="letter-block-c" data-node-id="3:152">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector4} />
          </div>
        </div>
        <div className="letter-text-c">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:243">C</p>
          </div>
        </div>
      </div>

      {/* S Letter Block */}
      <div className="letter-group-s" data-node-id="3:245">
        <div className="letter-block-s" data-node-id="3:155">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector7} />
          </div>
        </div>
        <div className="letter-text-s">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:244">S</p>
          </div>
        </div>
      </div>

      {/* Additional decoration blocks */}
      <div className="block-decoration-1" data-node-id="3:166">
        <div className="block-image-wrapper">
          <img alt="" className="block-image" src={imgGroup6} />
        </div>
      </div>

      <div className="block-decoration-2" data-node-id="3:171">
        <div className="block-image-wrapper">
          <img alt="" className="block-image" src={imgFrame5} />
        </div>
      </div>

      <div className="block-decoration-3" data-node-id="3:167">
        <div className="block-image-wrapper">
          <img alt="" className="block-image" src={imgVector16} />
        </div>
      </div>

      <div className="block-decoration-4" data-node-id="3:172">
        <img alt="" className="block-image" src={imgFrame6} />
      </div>

      {/* Second row - middle area */}
      <div className="block-container-2">
        <div className="block-container-2-inner">
          <div className="block-decoration-5" data-node-id="3:149">
            <div className="block-image-wrapper">
              <img alt="" className="block-image" src={imgVector2} />
            </div>
          </div>
        </div>
      </div>

      {/* M Letter Block */}
      <div className="letter-group-m" data-node-id="3:249">
        <div className="letter-block-m" data-node-id="3:150">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector3} />
          </div>
        </div>
        <div className="letter-text-m">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:248">M</p>
          </div>
        </div>
      </div>

      {/* A Letter Block */}
      <div className="letter-group-a" data-node-id="3:251">
        <div className="letter-block-a" data-node-id="3:153">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector5} />
          </div>
        </div>
        <div className="letter-text-a">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:250">A</p>
          </div>
        </div>
      </div>

      {/* N Letter Block */}
      <div className="letter-group-n" data-node-id="3:253">
        <div className="letter-block-n" data-node-id="3:154">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector6} />
          </div>
        </div>
        <div className="letter-text-n">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:252">N</p>
          </div>
        </div>
      </div>

      {/* I Letter Block */}
      <div className="letter-group-i" data-node-id="3:255">
        <div className="letter-block-i" data-node-id="3:156">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector8} />
          </div>
        </div>
        <div className="letter-text-i">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:254">I</p>
          </div>
        </div>
      </div>

      {/* Second C Letter Block */}
      <div className="letter-group-c2" data-node-id="3:256">
        <div className="letter-block-c2" data-node-id="3:257">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector7} />
          </div>
        </div>
        <div className="letter-text-c2">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:258">C</p>
          </div>
        </div>
      </div>

      {/* X Letter Block (Z in design) */}
      <div className="letter-group-x" data-node-id="3:259">
        <div className="letter-block-x" data-node-id="3:260">
          <div className="letter-block-image-wrapper">
            <img alt="" className="block-image" src={imgVector5} />
          </div>
        </div>
        <div className="letter-text-x">
          <div className="letter-text-rotated">
            <p className="letter-text" data-node-id="3:261">X</p>
          </div>
        </div>
      </div>

      {/* Bottom decorations */}
      <div className="bottom-decoration-1">
        <div className="bottom-decoration-inner">
          <div className="bottom-block-1" data-node-id="3:168">
            <div className="block-image-wrapper">
              <img alt="" className="block-image" src={imgVector17} />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-decoration-2" data-node-id="3:163">
        <div className="block-image-wrapper">
          <img alt="" className="block-image" src={imgGroup5} />
        </div>
      </div>
    </div>
  );
}

export default App;
