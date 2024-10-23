import * as React from 'react';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Container, Box } from '@mui/material';
import { Report } from '../interfaces';
import { useTranslations } from "next-intl";

// Sample data for reports
const reportsData: Report[] = [
  { id: 1, title: 'Monthly Sales Report', description: 'A detailed analysis of the monthly sales performance.' },
  { id: 2, title: 'Customer Feedback Report', description: 'Insights from customer feedback over the last quarter.' },
  { id: 3, title: 'Inventory Status Report', description: 'Current stock and inventory levels for all products.' },
];

const Reports: React.FC = () => {
  const t = useTranslations('reports');

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('reportTitle')}
      </Typography>
      <Box sx={{ mt: 4 }}>
        <List>
          {reportsData.map((report) => (
            <ListItem key={report.id} sx={{ mb: 2 }}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {report.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {report.description}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Reports;
