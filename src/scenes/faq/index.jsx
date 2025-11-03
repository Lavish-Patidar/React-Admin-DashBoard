import Header from "../../components/Header";
import { Box, useTheme, Typography } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcons from '@mui/icons-material/ExpandMore'
import { tokens } from "../../thems";




const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m='20px'>
            <Header title={'FAQ'} subTitle={"Frequently Asked Ouestions page"} />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcons />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis reiciendis dolores veniam incidunt blanditiis aliquam exercitationem quisquam quibusdam, nulla ducimus nemo fugiat, voluptatum eius in dolorem illo. Reprehenderit, repudiandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcons />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another  An Importan question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis reiciendis dolores veniam incidunt blanditiis aliquam exercitationem quisquam quibusdam, nulla ducimus nemo fugiat, voluptatum eius in dolorem illo. Reprehenderit, repudiandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcons />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis reiciendis dolores veniam incidunt blanditiis aliquam exercitationem quisquam quibusdam, nulla ducimus nemo fugiat, voluptatum eius in dolorem illo. Reprehenderit, repudiandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcons />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Rendom Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis reiciendis dolores veniam incidunt blanditiis aliquam exercitationem quisquam quibusdam, nulla ducimus nemo fugiat, voluptatum eius in dolorem illo. Reprehenderit, repudiandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcons />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Final Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officiis reiciendis dolores veniam incidunt blanditiis aliquam exercitationem quisquam quibusdam, nulla ducimus nemo fugiat, voluptatum eius in dolorem illo. Reprehenderit, repudiandae!
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </Box>
    )
}


export default FAQ;