/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  extendedDetail: string;
  category: 'Planning' | 'Focus' | 'Intelligence' | 'Accountability';
  icon: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface WorkflowStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  keyFeature: string;
}

export interface AppScreenPreview {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  badge: string;
  colorHint: string;
}

export type SuggestionCategory = 'add' | 'modify' | 'remove';

export type SuggestionStatus = 'new' | 'reviewing' | 'planned' | 'in_development' | 'completed' | 'declined';

export interface Suggestion {
  id: string;
  displayName: string;
  country?: string;
  category: SuggestionCategory;
  suggestion: string;
  createdAt: string;
  status: SuggestionStatus;
  votes: number;
}

export interface SubmitSuggestionInput {
  displayName: string;
  country?: string;
  category: SuggestionCategory;
  suggestion: string;
}

export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export interface Review {
  id: string;
  displayName: string;
  country?: string;
  rating?: number; // 1 to 5 stars, optional
  comment: string;
  createdAt: string;
  status: ReviewStatus;
}

export interface SubmitReviewInput {
  displayName: string;
  country?: string;
  rating?: number;
  comment: string;
}

export interface EarlyAccessSubscriber {
  email: string;
  deviceModel?: string;
  createdAt: string;
}
