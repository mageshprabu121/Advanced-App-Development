// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function FAQ() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <Container
//       id="faq"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: { xs: 3, sm: 6 },
//       }}
//     >
//       <Typography
//         component="h2"
//         variant="h4"
//         color="text.primary"
//         sx={{
//           width: { sm: '100%', md: '60%' },
//           textAlign: { sm: 'left', md: 'center' },
//         }}
//       >
//         Frequently asked questions
//       </Typography>
//       <Box sx={{ width: '100%' }}>
//         <Accordion
//           expanded={expanded === 'panel1'}
//           onChange={handleChange('panel1')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1d-content"
//             id="panel1d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               How do I contact customer support if I have a question or issue?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               You can reach our customer support team by emailing
//               <Link> support@email.com </Link>
//               or calling our toll-free number. We&apos;re here to assist you
//               promptly.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === 'panel2'}
//           onChange={handleChange('panel2')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2d-content"
//             id="panel2d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Can I return the product if it doesn&apos;t meet my expectations?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               Absolutely! We offer a hassle-free return policy. If you&apos;re not
//               completely satisfied, you can return the product within [number of
//               days] days for a full refund or exchange.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === 'panel3'}
//           onChange={handleChange('panel3')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3d-content"
//             id="panel3d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               What makes your product stand out from others in the market?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               Our product distinguishes itself through its adaptability, durability,
//               and innovative features. We prioritize user satisfaction and
//               continually strive to exceed expectations in every aspect.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === 'panel4'}
//           onChange={handleChange('panel4')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel4d-content"
//             id="panel4d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Is there a warranty on the product, and what does it cover?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               Yes, our product comes with a [length of warranty] warranty. It covers
//               defects in materials and workmanship. If you encounter any issues
//               covered by the warranty, please contact our customer support for
//               assistance.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Container>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              How can I apply for admission to your college?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You can apply for admission by visiting our online admission portal and completing the application form. Make sure to provide all required documents and information accurately.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              What are the eligibility criteria for admission?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              The eligibility criteria vary depending on the course and program you are applying for. Please refer to the admission brochure or our website for detailed information on eligibility requirements.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              How can I check the status of my application?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You can check the status of your application by logging into your account on our admission portal. You will receive notifications regarding the status of your application as it progresses through the admission process.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Are there any scholarships or financial aid available?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, we offer scholarships and financial aid to eligible students based on various criteria such as academic merit, financial need, and extracurricular achievements. You can find more information about available scholarships and how to apply on our website.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
