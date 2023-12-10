import { Grid, Typography, List, Box } from '@mui/material';
import { Email, GitHub, LinkedIn, LocationOn, Public } from '@mui/icons-material';
import { HideWrapper, DenseListItem, SpacedChip, Link } from '../../src/Components';

const Resume = () => <>
  <HideWrapper />
  <Box pt={2} display="flex" gap={2}>
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a style={{ color: '#d14146' }} href="/" className="hide-print">Website</a>
    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
    <a style={{ color: '#d14146' }} href="/portfolio/index.html" className="hide-print">Portfolio</a>
  </Box>
  <Grid container spacing={4} direction="row-reverse" py={4}>
    <Grid item xs={12} className="show-print">
      <Typography variant="h1" className="font-marker">Jannes Drijkoningen</Typography>
    </Grid>
    <Grid item xs={12} lg={4}>
      <Box width="100%" display="flex" justifyContent="center" mb={1.2}>
        <img
          alt="picture of Jannes"
          width={125}
          height={125}
          style={{ borderRadius: 100 }}
          src="/img/resume/portrait.jpg"
        />
      </Box>
      <List dense>
        <DenseListItem icon={<Email />} label="jannesdrijkoningen@gmail.com" />
        <DenseListItem icon={<LocationOn />} label="Hasselt, Belgium" />
        <DenseListItem icon={<Public />} label="https://jannes.io" />
        <DenseListItem icon={<GitHub />} label="jannes-io" />
        <DenseListItem icon={<LinkedIn />} label="jannes-drijkoningen" />
      </List>
      <Box mb={2} className="taglist">
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
      <Typography variant="h1" pt={7} className="font-marker hide-print">
        Jannes Drijkoningen
      </Typography>
      <Typography pt={2} fontStyle="italic">
        Experienced full stack developer with a passion for elegant, no-compromise solutions.
        With nearly a decade of experience, I seek a senior fullstack or lead developer position
        to drive innovation and create value for your organization.
        With a quick head for learning and a commitment to continuous self-education, I thrive in
        fast-paced, dynamic environments.
        My love for teaching and working with diverse teams allows me to contribute to the
        project&apos;s success while mentoring others.
        I prioritize creating clean and maintainable codebases that follow best practices and are
        always mindful of scalability and security.
        I&apos;m excited to leverage cutting-edge technologies to deliver efficient solutions that
        exceed all expectations.
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h5">Professional Experience</Typography>
      <Typography variant="h6">Fullstack Developer</Typography>
      <Typography variant="caption">A&C systems | Jun 2018 - Present</Typography>
      <p>
        During my time at A&C systems, I grew into the senior full-stack developer I am today.
        Working on diverse projects for leading telecommunication clients ranging from completely
        custom applications to fully integrated e-commerce solutions.
      </p>
      <p>
        Throughout my tenure, I not only refined my technical expertise but also cultivated
        leadership and teamwork skills. I am passionate about sharing my knowledge and
        mentoring other developers, having trained and supported several team members in their
        professional growth.
      </p>
      <p>
        In addition to my development responsibilities, I also assisted with business
        decisions, using my technical and analytical skills to collaborate with project managers
        to ensure successful project outcomes. I value clear communication, and I strive to
        bridge the gap between technical and non-technical stakeholders.
      </p>

      <Typography variant="h6">Application Administrator</Typography>
      <Typography variant="caption">Flemish Government | Feb 2017 - Jun 2018</Typography>
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
      <Typography variant="h5">Degrees & Certificates</Typography>

      <Typography variant="h6">Symfony 6 Certified Developer (Expert)</Typography>
      <Typography variant="caption">SensioLabs | 2023</Typography>
      <Box paddingBottom={2}>
        <SpacedChip label="Symfony" />
        <SpacedChip label="Twig" />
        <SpacedChip label="HTTP" />
        <SpacedChip label="PHP" />
        <SpacedChip label="Automated Tests" />
      </Box>

      <Typography variant="h6" mt={0}>Digital Art & Entertainment</Typography>
      <Typography variant="caption">Hogeschool West-Vlaanderen | 2015 - 2017</Typography>
      <Box paddingBottom={2}>
        <SpacedChip label="C++ Programming" />
        <SpacedChip label="Applied Maths" />
        <SpacedChip label="Concept Art" />
        <SpacedChip label="3D Modeling" />
        <SpacedChip label="UI/UX Design" />
      </Box>

      <Typography variant="h6" mt={0}>Accounting & IT</Typography>
      <Typography variant="caption">Sint-Augustinusinstituut Bree | 2010 - 2014</Typography>
      <Box paddingBottom={2}>
        <SpacedChip label="Economy" />
        <SpacedChip label="Accounting" />
        <SpacedChip label="Business Management" />
        <SpacedChip label="ASP.NET Programming" />
      </Box>
    </Grid>
  </Grid>
</>;

export default Resume;
