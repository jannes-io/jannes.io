import { Grid, Typography, List, Box } from '@mui/material';
import { Email, GitHub, LinkedIn, LocationOn, Public } from '@mui/icons-material';
import { HideWrapper, DenseListItem, SpacedChip } from '../../src/Components';

const Resume = () => <>
  <HideWrapper />
  <Grid container spacing={4} direction="row-reverse" py={8}>
    <Grid item xs={12} lg={4}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
        <img
          width={100}
          height={100}
          style={{ borderRadius: 100 }}
          src="https://placehold.co/400"
        />
      </div>
      <List dense>
        <DenseListItem icon={<Email />} label="jannesdrijkoningen@gmail.com" />
        <DenseListItem icon={<LocationOn />} label="Hasselt, Belgium" />
        <DenseListItem icon={<Public />} label="https://jannes.io" />
        <DenseListItem icon={<GitHub />} label="jannes-io" />
        <DenseListItem icon={<LinkedIn />} label="jannes-drijkoningen" />
      </List>
      <Box mb={2}>
        <SpacedChip label="PHP" />
        <SpacedChip label="Symfony" />
        <SpacedChip label="React" />
        <SpacedChip label="TypeScript" />
        <SpacedChip label="MySQL" />
        <SpacedChip label="Elasticsearch" />
        <SpacedChip label="Docker" />
        <SpacedChip label="AWS" />
      </Box>
    </Grid>
    <Grid item xs={12} lg={8}>
      <Typography variant="h1" className="font-marker">Jannes Drijkoningen</Typography>
      <Typography pt={8} fontStyle="italic">
        Experienced full stack developer with a passion for elegant, no-compromise solutions.
        With nearly a decade of experience, I seek a senior fullstack or lead developer position
        to drive innovation and create value for your organization.
        With a quick head for learning and a commitment to continuous self-education, I thrive in
        fast-paced, dynamic environments.
        My love for teaching and working with diverse teams allows me to contribute to the
        project's success while mentoring others.
        I prioritize creating clean, maintainable codebases that follow best practices and is
        always mindful of scalability and security.
        I'm excited to leverage cutting-edge technologies to deliver efficient solutions that
        exceed all expectations.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h5">Professional Experience</Typography>
      <Typography variant="h6">A&C systems</Typography>
      <Typography variant="caption">Fullstack Developer | Jun 2018 - Present</Typography>
      <p>
        During my time at A&C systems, I grew into the senior full-stack developer I am today.
        Working on diverse projects for leading telecommunication clients ranging from completely
        custom applications to fully integrated e-commerce solutions.
      </p>
      <p>
        Throughout my tenure, I not only refined my technical expertise but also cultivated
        strong leadership and teamwork skills. I am passionate about sharing my knowledge and
        mentoring junior developers, having trained and supported several team members in their
        professional growth.
      </p>
      <p>
        In addition to my development responsibilities, I also assisted with business
        decisions, using my technical and analytical skills to collaborate with project managers
        to ensure successful project outcomes. I value clear communication, and I strive to
        bridge the gap between technical and non-technical stakeholders.
      </p>
      <Typography variant="h6">Flemish Government</Typography>
      <Typography variant="caption">Application Administrator | Feb 2017 - Jun 2018</Typography>
      <p>
        As application administrators at the department of government personnel, we held the
        critical responsibility of overseeing the payroll system, written in Object Star, and
        moderating our CRM. We understood the potential dangers of any errors, and we took every
        precaution to minimize the risk of any mishaps. Understanding that even the smallest
        errors could have far-reaching implications for the organization as a whole.
      </p>
      <p>
        Aside from this critical responsibility, we also took on other tasks, working on small
        tools written in various languages and technologies to improve our workflow and automate
        our tasks.
      </p>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h5">Formal Education</Typography>
      <Typography variant="h6">Hogeschool West-Vlaanderen</Typography>
      <Typography variant="caption">Digital Art & Entertainment | 2015 - 2017</Typography>
      <Box>
        <SpacedChip label="C++ Programming" />
        <SpacedChip label="Applied Maths" />
        <SpacedChip label="Concept Art" />
        <SpacedChip label="3D Modeling" />
        <SpacedChip label="UI/UX Design" />
      </Box>
      <Typography variant="h6">Sint-Augustinusinstituut Bree</Typography>
      <Typography variant="caption">Accounting & IT | 2010 - 2014</Typography>
      <Box>
        <SpacedChip label="Economy" />
        <SpacedChip label="Accounting" />
        <SpacedChip label="Business Management" />
        <SpacedChip label="ASP.NET Programming" />
      </Box>
    </Grid>
  </Grid>
</>;

export default Resume;
