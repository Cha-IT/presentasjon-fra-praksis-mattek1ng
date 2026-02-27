import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image, CodePane, Appear, ListItem, UnorderedList, Grid, Box, } from 'spectacle';
import ntnuLogo from './assets/ntnuLogo.png';
import glas from './assets/glas.png';
import glas2 from './assets/glas2.jpg';
import kalv from './assets/kalv.png';
import kalv2 from './assets/kalv2.jpg';
import bilder from './assets/bilder.png';
import bilder2 from './assets/bilder2.png';
import customTheme from './components/customTheme';


function App() {
  return (
    <Deck theme={customTheme} template={DefaultTemplate} transitionEffect="fade" transitionDuration={500}>


      
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading>Prakisplass uke 6 & 7</Heading>
          <Image src={ntnuLogo} alt="NTNU Logo" width="300px" />

         
        </FlexBox>
      </Slide>

      {/* Slide 2: Innhold */}
    <Slide>
 <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
  <Box backgroundColor="#09637E" padding={10}>
    <Heading>Innhold</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>Hvor var jeg?</ListItem>
      </Appear>
      <Appear>
        <ListItem>Hva gjorde jeg?</ListItem>
      </Appear>
      <Appear>
        <ListItem>Hvordan jobbet jeg?</ListItem>
      </Appear>
    </UnorderedList>
  </Box>

  {/* right‑hand column – the image */}
  <Box backgroundColor="#09637E" padding={10}>
    <Appear>
      <Image src={glas} alt="Glas" width="500px" height="320px" />
    </Appear>
      <Appear>
      <Image src={kalv} alt="Kalv" width="500px" height="320px" />
    </Appear>
  </Box>
</Grid>
</Slide>
   
    <Slide>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
  <Box backgroundColor="#09637E" padding={10}>
    <Heading>Hvor var jeg?</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>NTNU</ListItem>
      </Appear>
      <Appear>
        <ListItem>Uke 6 var jeg på Institutt for energi- og prosessteknikk</ListItem>
      </Appear>
      <Appear>
        <ListItem>Uke 7 var jeg på Campus Kalvskinnet</ListItem>
      </Appear>
    </UnorderedList>
  </Box>
     <Box backgroundColor="#09637E" padding={10}>
    <Appear>
      <Image src={glas2} alt="Glas" width="500px" height="320px" />
    </Appear>
      <Appear>
      <Image src={kalv2} alt="Kalv" width="500px" height="320px" />
    </Appear>
  </Box>
     </Grid>
    </Slide>

  <Slide>
    <Heading>NTNU Energi- og Prosessteknikk</Heading>
 <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
  <Box backgroundColor="#09637E" padding={10}>
    <UnorderedList>
      <Appear>
        <ListItem>Tanking av datamaskiner</ListItem>
      </Appear>
      <Appear>
        <ListItem>Viritual Box, oppsett av VM</ListItem>
      </Appear>
      <Appear>
        <ListItem>Bygging av datamaskin</ListItem>
      </Appear>
    </UnorderedList>
  </Box>

  {/* right‑hand column – the image */}
  <Box backgroundColor="#09637E" padding={10}>
    <Appear>
      <Image src={bilder} alt="Bilder" width="450px" height="400px" />
    </Appear>
      <Appear>
      
    </Appear>
  </Box>
</Grid>
</Slide>


  <Slide>
    <Heading>NTNU Campus Kalvskinnet</Heading>
 <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
  <Box backgroundColor="#09637E" padding={10}>
    <UnorderedList>
      <Appear>
        <ListItem>Oppsett av Proxmox</ListItem>
      </Appear>
      <Appear>
        <ListItem>Pfsense</ListItem>
      </Appear>
      <Appear>
        <ListItem>Patching i ett Rackskap</ListItem>
      </Appear>
    </UnorderedList>
  </Box>

  {/* right‑hand column – the image */}
  <Box backgroundColor="#09637E" padding={10}>
    <Appear>
      <Image src={bilder2} alt="Bilder" width="450px" height="400px" />
    </Appear>
      <Appear>
      
    </Appear>
  </Box>
</Grid>
</Slide>


    </Deck>
  );
}

export default App;









