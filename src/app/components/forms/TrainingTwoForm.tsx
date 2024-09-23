import { TrainingTwoFormProps } from "@/app/interfaces";
import { Accordion, AccordionDetails, AccordionSummary, Box, TextField } from "@mui/material";
import React from "react";

const TrainingTwoForm: React.FC<TrainingTwoFormProps> = ({ trainingData }) => {
    return (
        <Box sx={{ mt: 2 }}>
            {
                trainingData.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Accordion>
                            <AccordionSummary>{item.exercise}</AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                {
                                    Array.from({ length: item.sets }, (_, key) => (
                                        <Box key={key}>
                                            <TextField
                                                label="Planned repetitions"
                                                value={item.repetitions}
                                                variant="outlined"
                                                aria-readonly
                                                disabled
                                            />
                                            <TextField
                                                id={`training[${index}][weight]`}
                                                name={`training[${index}][weight]`}
                                                label="Weight"
                                                variant="outlined"
                                                type="number"
                                                sx={{ mr: 2 }}
                                            />
                                            <TextField
                                                id={`training[${index}][sets]`}
                                                name={`training[${index}][sets]`}
                                                label="Repetitions"
                                                variant="outlined"
                                                type="number"
                                                sx={{ mr: 2 }}
                                            />
                                        </Box>
                                    ))
                                }
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))
            }
        </Box>
    );
};

export default TrainingTwoForm;
