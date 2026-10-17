import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: '#1e293b',
    lineHeight: 1.4,
  },
  /* Header Section */
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: '#2563eb',
    paddingBottom: 10,
  },
  nameWrapper: {
    marginBottom: 6,
  },
  headerName: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    letterSpacing: 1,
    textAlign: 'center',
    lineHeight: 1.2,
  },
  titleWrapper: {
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 1.2,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    fontSize: 9,
    color: '#475569',
  },
  contactItem: {
    color: '#334155',
  },
  bulletSep: {
    color: '#94a3b8',
    fontSize: 8,
  },
  /* Section Styles */
  section: {
    marginTop: 12,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 3,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  summaryText: {
    fontSize: 9.2,
    color: '#334155',
    lineHeight: 1.48,
    textAlign: 'justify',
  },
  /* Skills Grid */
  skillsCategory: {
    flexDirection: 'row',
    marginBottom: 4,
    fontSize: 9,
  },
  skillCategoryTitle: {
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    width: 155,
  },
  skillCategoryItems: {
    flex: 1,
    color: '#334155',
  },
  /* Experience & Projects */
  itemBlock: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  roleTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  periodDate: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#64748b',
  },
  companyLine: {
    fontSize: 9.2,
    color: '#2563eb',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3,
    paddingLeft: 6,
  },
  bulletDot: {
    width: 3.5,
    height: 3.5,
    borderRadius: 2,
    backgroundColor: '#2563eb',
    marginTop: 5,
    marginRight: 7,
    flexShrink: 0,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.8,
    color: '#334155',
    lineHeight: 1.4,
  },
  projectDomain: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#059669',
  },
  projectTechLine: {
    fontSize: 8.5,
    color: '#64748b',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  /* Education */
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  eduDegree: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  eduInst: {
    fontFamily: 'Helvetica',
    color: '#475569',
  },
  /* Page 2 Header */
  pageHeaderCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 6,
    marginBottom: 14,
  },
  pageHeaderName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  pageHeaderSub: {
    fontSize: 8.5,
    color: '#64748b',
  },
});

export default function ResumePdfDocument({ data }) {
  const { personalInfo, skills = {}, experience = [], projects = [], education = [] } = data;

  return (
    <Document title="Chetan_Shelke_Resume" author="Chetan Shelke">
      {/* ================= PAGE 1 ================= */}
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.nameWrapper}>
            <Text style={styles.headerName}>{personalInfo?.name || 'CHETAN SHELKE'}</Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.headerTitle}>{personalInfo?.title || 'Java Backend Developer'}</Text>
          </View>
          <View style={styles.contactRow}>
            {personalInfo?.location && <Text style={styles.contactItem}>{personalInfo.location}</Text>}
            <Text style={styles.bulletSep}>|</Text>
            {personalInfo?.phone && <Text style={styles.contactItem}>{personalInfo.phone}</Text>}
            <Text style={styles.bulletSep}>|</Text>
            {personalInfo?.email && <Text style={styles.contactItem}>{personalInfo.email}</Text>}
            <Text style={styles.bulletSep}>|</Text>
            <Text style={styles.contactItem}>linkedin.com/in/chetan-shelke</Text>
          </View>
        </View>

        {/* Professional Summary */}
        {personalInfo?.bio && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summaryText}>{personalInfo.bio}</Text>
          </View>
        )}

        {/* Technical Skills */}
        {skills && Object.keys(skills).length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            {Object.entries(skills).map(([category, items]) => (
              <View key={category} style={styles.skillsCategory}>
                <Text style={styles.skillCategoryTitle}>{category}:</Text>
                <Text style={styles.skillCategoryItems}>
                  {Array.isArray(items) ? items.join(', ') : items}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Work Experience */}
        {experience && experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {experience.map((exp, idx) => (
              <View key={idx} style={styles.itemBlock} wrap={false}>
                <View style={styles.itemHeader}>
                  <Text style={styles.roleTitle}>{exp.role}</Text>
                  <Text style={styles.periodDate}>{exp.period}</Text>
                </View>
                <Text style={styles.companyLine}>{exp.company}{exp.location ? ` | ${exp.location}` : ''}</Text>
                {exp.highlights && exp.highlights.map((bullet, bIdx) => (
                  <View key={bIdx} style={styles.bulletRow}>
                    <View style={styles.bulletDot} />
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}
      </Page>

      {/* ================= PAGE 2 ================= */}
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeaderCont}>
          <Text style={styles.pageHeaderName}>{personalInfo?.name} — {personalInfo?.title}</Text>
          <Text style={styles.pageHeaderSub}>{personalInfo?.phone} | {personalInfo?.email} | linkedin.com/in/chetan-shelke</Text>
        </View>

        {/* Key Projects */}
        {projects && projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Projects</Text>
            {projects.map((proj, idx) => (
              <View key={idx} style={styles.itemBlock} wrap={false}>
                <View style={styles.itemHeader}>
                  <Text style={styles.roleTitle}>{proj.title}</Text>
                  {proj.category && <Text style={styles.projectDomain}>[{proj.category}]</Text>}
                </View>
                {proj.technologies && (
                  <Text style={styles.projectTechLine}>
                    Tech Stack: {Array.isArray(proj.technologies) ? proj.technologies.join(', ') : proj.technologies}
                  </Text>
                )}
                {proj.highlights && proj.highlights.map((bullet, bIdx) => (
                  <View key={bIdx} style={styles.bulletRow}>
                    <View style={styles.bulletDot} />
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, idx) => (
              <View key={idx} style={styles.eduRow}>
                <Text style={styles.eduDegree}>
                  {edu.degree}{edu.institution ? ` — ${edu.institution}` : ''}
                </Text>
                <Text style={styles.periodDate}>{edu.period}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
