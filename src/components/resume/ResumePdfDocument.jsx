import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: '#1a1a1a',
    lineHeight: 1.4,
  },
  header: {
    textAlign: 'center',
    marginBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: '#2563eb',
    paddingBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 11,
    color: '#2563eb',
    marginTop: 2,
    fontWeight: 'bold',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 6,
    fontSize: 8.5,
    color: '#475569',
    flexWrap: 'wrap',
  },
  section: {
    marginTop: 10,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: '#0f172a',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 2,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summaryText: {
    fontSize: 9,
    color: '#334155',
    lineHeight: 1.45,
    textAlign: 'justify',
  },
  skillsCategory: {
    flexDirection: 'row',
    marginBottom: 3,
    fontSize: 8.5,
  },
  skillCategoryTitle: {
    fontWeight: 'bold',
    color: '#0f172a',
    width: 140,
  },
  skillCategoryItems: {
    flex: 1,
    color: '#334155',
  },
  expItem: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  expRole: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  expPeriod: {
    fontSize: 8.5,
    color: '#64748b',
    fontWeight: 'bold',
  },
  expCompany: {
    fontSize: 9,
    color: '#2563eb',
    marginBottom: 3,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2.5,
    paddingLeft: 6,
  },
  bulletDot: {
    width: 10,
    fontSize: 8.5,
    color: '#2563eb',
  },
  bulletContent: {
    flex: 1,
    fontSize: 8.5,
    color: '#334155',
    lineHeight: 1.35,
  },
  projectItem: {
    marginBottom: 7,
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  projectTitle: {
    fontSize: 9.5,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  projectCategory: {
    fontSize: 8,
    color: '#059669',
    fontWeight: 'bold',
  },
  projectTech: {
    fontSize: 8,
    color: '#475569',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  eduItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    fontSize: 8.5,
  },
  eduDegree: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  eduInst: {
    color: '#475569',
  },
  eduPeriod: {
    color: '#64748b',
  },
});

export default function ResumePdfDocument({ data }) {
  const { personalInfo, skills = {}, experience = [], projects = [], education = [] } = data;

  return (
    <Document title={`${personalInfo?.name || 'Resume'}_Resume`} author={personalInfo?.name || 'Resume'}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo?.name || ''}</Text>
          <Text style={styles.title}>{personalInfo?.title || ''}</Text>
          <View style={styles.contactRow}>
            {personalInfo?.location ? <Text>{personalInfo.location}</Text> : null}
            {personalInfo?.location && personalInfo?.phone ? <Text>•</Text> : null}
            {personalInfo?.phone ? <Text>{personalInfo.phone}</Text> : null}
            {personalInfo?.phone && personalInfo?.email ? <Text>•</Text> : null}
            {personalInfo?.email ? <Text>{personalInfo.email}</Text> : null}
            {personalInfo?.email && personalInfo?.linkedin ? <Text>•</Text> : null}
            {personalInfo?.linkedin ? <Text>{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</Text> : null}
            {personalInfo?.linkedin && personalInfo?.github ? <Text>•</Text> : null}
            {personalInfo?.github ? <Text>{personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}</Text> : null}
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
              <View key={idx} style={styles.expItem}>
                <View style={styles.expHeader}>
                  <Text style={styles.expRole}>{exp.role}</Text>
                  <Text style={styles.expPeriod}>{exp.period}</Text>
                </View>
                <Text style={styles.expCompany}>{exp.company}{exp.location ? ` | ${exp.location}` : ''}</Text>
                {exp.highlights && exp.highlights.map((bullet, bIdx) => (
                  <View key={bIdx} style={styles.bulletPoint}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletContent}>{bullet}</Text>
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
              <View key={idx} style={styles.projectItem}>
                <View style={styles.projectTitleRow}>
                  <Text style={styles.projectTitle}>{proj.title}</Text>
                  {proj.category && <Text style={styles.projectCategory}>[{proj.category}]</Text>}
                </View>
                {proj.technologies && (
                  <Text style={styles.projectTech}>
                    Tech Stack: {Array.isArray(proj.technologies) ? proj.technologies.join(', ') : proj.technologies}
                  </Text>
                )}
                {proj.highlights && proj.highlights.map((bullet, bIdx) => (
                  <View key={bIdx} style={styles.bulletPoint}>
                    <Text style={styles.bulletDot}>▹</Text>
                    <Text style={styles.bulletContent}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, idx) => (
              <View key={idx} style={styles.eduItem}>
                <Text style={styles.eduDegree}>
                  {edu.degree}{edu.institution ? ` — ${edu.institution}` : ''}
                </Text>
                <Text style={styles.eduPeriod}>{edu.period}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
