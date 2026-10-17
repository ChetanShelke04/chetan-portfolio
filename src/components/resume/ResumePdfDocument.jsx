import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 36,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#1e293b',
    lineHeight: 1.35,
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#2563eb',
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 5,
    fontSize: 8.5,
    color: '#475569',
  },
  contactItem: {
    color: '#334155',
  },
  bulletSep: {
    color: '#94a3b8',
    fontSize: 7,
  },
  section: {
    marginTop: 8,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 2,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summaryText: {
    fontSize: 8.5,
    color: '#334155',
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  skillsCategory: {
    flexDirection: 'row',
    marginBottom: 2.5,
    fontSize: 8.2,
  },
  skillCategoryTitle: {
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    width: 145,
  },
  skillCategoryItems: {
    flex: 1,
    color: '#334155',
  },
  itemBlock: {
    marginBottom: 6,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  roleTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  periodDate: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#64748b',
  },
  companyLine: {
    fontSize: 8.5,
    color: '#2563eb',
    marginBottom: 2.5,
    fontFamily: 'Helvetica-Bold',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 3.5,
    height: 3.5,
    borderRadius: 2,
    backgroundColor: '#2563eb',
    marginTop: 4,
    marginRight: 6,
    flexShrink: 0,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.2,
    color: '#334155',
    lineHeight: 1.35,
  },
  projectDomain: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#059669',
  },
  projectTechLine: {
    fontSize: 7.8,
    color: '#64748b',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  eduDegree: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
  },
  eduInst: {
    fontFamily: 'Helvetica',
    color: '#475569',
  },
});

export default function ResumePdfDocument({ data }) {
  const { personalInfo, skills = {}, experience = [], projects = [], education = [] } = data;

  return (
    <Document title="Chetan_Shelke_Resume" author="Chetan Shelke">
      <Page size="A4" style={styles.page}>
        {/* Header - Strictly NO github in the resume header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo?.name || 'CHETAN SHELKE'}</Text>
          <Text style={styles.title}>{personalInfo?.title || 'Java Backend Developer'}</Text>
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
                  {edu.degree} — <Text style={styles.eduInst}>{edu.institution}</Text>
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
