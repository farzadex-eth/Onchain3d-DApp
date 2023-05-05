import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import TwitterCard from './TwitterCard';

function About() {
    return (
        <>
            <Container maxWidth="lg">
                <div className="aboutbox">
                    <Typography component="h1" variant="h4" color="black"
                        sx={{
                            my: "1rem",
                            fontFamily: "monospace"
                        }}
                    >
                        About
                        <hr />
                    </Typography>
                    <Typography component="p" color="black"
                        sx={{
                            my: "1rem",
                            fontFamily: "monospace",
                            px: '2rem',
                            textAlign: 'left'
                        }}
                    >
                    </Typography>
                    <div style={{ textAlign: 'left', padding: "0 1rem", fontSize: "18px" }}>
                        <p>
                            OnChain3D is an innovative and challenging effort to create a 3D rendering algorithm in Solidity and put it fully on blockChain. The project aims to leverage the power of decentralized computing and blockchain technology to render 3D shapes and polygons using Solidity, which is known for its limitations in handling floating-point arithmetic.
                        </p>
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justifyContent="space-around"
                            alignItems="flex-start"
                            alignContent="stretch"
                            wrap="wrap"
                            sx={{ my: '1rem', textAlign: 'center' }}
                        >
                            <Grid item xs={6} sm={4}>
                                <img src='/t0.svg' alt='token-0-tetrahedron' />
                                <h5>Tetrahedron</h5>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <img src='/t1.svg' alt='token-1-cube' />
                                <h5>Cube</h5>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <img src='/t2.svg' alt='token-2-octahedron' />
                                <h5>Octahedron</h5>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <img src='/t3.svg' alt='token-3-dodecahedron' />
                                <h5>Dodecahedron</h5>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <img src='/t4.svg' alt='token-4-icosahedron' />
                                <h5>Icosahedron</h5>
                            </Grid>
                        </Grid>
                        <p>
                            The project uses the <a href='https://github.com/abdk-consulting/abdk-libraries-solidity' target='_blank' rel="noopener noreferrer">ABDKMath64x64</a> library to provide a framework for fixed-point 64x64 computation, which is necessary for us to develope linear algebraic computations required for 3D rendering. The algorithm uses a perspective projection technique to project vertices of 3D shapes onto a 2D plane, which is then rendered using a painter's algorithm. The use of <a href='https://www.tutorialspoint.com/fixed-point-and-floating-point-number-representations' target='_blank' rel="noopener noreferrer">fixed-point</a> arithmetic and the <a href="https://en.wikipedia.org/wiki/Painter's_algorithm" target="_blank" rel="noopener noreferrer">painter's algorithm</a> enable the rendering of 3D shapes in Solidity, which is an impressive achievement given the limitations of the language.
                        </p>
                        <p>
                            The project includes rendering the five <a href="https://en.wikipedia.org/wiki/Platonic_solid" target="_blank" rel="noopener noreferrer">Platonic solids</a>, which are a set of regular polyhedra that have been known since ancient times. Rendering Platonic solids was chosen as a benchmark to test the correctness and accuracy of the 3D rendering algorithm.
                        </p>


                        <p>
                            OnChain3D smart contract provides an interactive interface for users to modify the rendered image by changing the observer position, viewing mode, color, and opacity, etc. This feature allows users to explore and manipulate the 3D shape in real-time, providing a unique and engaging user experience.
                        </p>
                        <div>
                            <img src="/token-edit.gif" alt="token-edit" width="100%" />
                        </div>
                        <p>
                            The OnChain3D project has been turned into an NFT project, where each consecutive group of five tokens represents the five different Platonic solids. The NFTs are deployed on the Goerli and Sepolia testnets to allow users to interact with the project before it is deployed on the Ethereum mainnet. The first 555 people to interact with the project and change the look of their token on the testnet will be whitelisted for the mainnet project.
                        </p>
                        <p>
                            The OnChain3D project was a result of the collaboration between two friends who shared a passion for blockchain technology and 3D rendering. <a href="https://twitter.com/sciNFTist" target="_blank" rel="noopener noreferrer">SciNFTist.eth</a> developed the algorithm and the <a href="https://twitter.com/farzadex" target="_blank" rel="noopener noreferrer">Farzadex.eth</a> developed the best in class Dapp to enable users to interact with the project.
                        </p>
                        <p>
                            The OnChain3D project represents an technical achievement that showcases the power and potential of decentralized computing and blockchain technology. The project is a testament to the power of Smart contracts and we hope to see others develope 3D On-Chain projects.
                        </p>
                        <p>
                            shout-out to <a href="https://abdk.consulting/" target="_blank" rel="noopener noreferrer">abdk.consulting</a>
                        </p>
                        <p>
                            also another shout-out to <a href="https://github.com/Sikorkaio/sikorka/blob/e75c91925c914beaedf4841c0336a806f2b5f66d/contracts/trigonometry.sol" target="_blank" rel="noopener noreferrer">Lefteris Karapetsas</a> for developing Trigonometry.sol .
                        </p>
                    </div>

                    <hr />
                    <div>
                        <Grid container spacing={1} sx={{ my: '1rem', width: '90%', mx: 'auto' }}>
                            <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
                                <TwitterCard
                                    photo="https://pbs.twimg.com/profile_images/1562106283192369153/UWVqRrjQ_400x400.jpg"
                                    banner="https://pbs.twimg.com/profile_banners/1372813898496188416/1645548754/1500x500"
                                    name="sciNFTist.eth"
                                    handle="sciNFTist"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
                                <TwitterCard
                                    photo="https://pbs.twimg.com/profile_images/1643890995900104707/SLE0SxR1_400x400.jpg"
                                    banner="https://pbs.twimg.com/profile_banners/1555794240/1645551806/1500x500"
                                    name="farzadex.eth"
                                    handle="farzadex"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About
